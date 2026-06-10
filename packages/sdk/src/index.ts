export interface LogEntry {
  level: "debug" | "info" | "warn" | "error";
  message: string;
  timestamp?: string;
  metadata?: Record<string, unknown>;
}

export interface IngestOptions {
  apiKey?: string;
  endpoint?: string;
}

export class UpstreamSDK {
  private apiKey: string;
  private endpoint: string;

  constructor(options: IngestOptions = {}) {
    this.apiKey = options.apiKey || "";
    this.endpoint = options.endpoint || "https://api.upstream.dev/v1/ingest";
  }

  async ingest(entry: LogEntry): Promise<void> {
    const payload = {
      ...entry,
      timestamp: entry.timestamp || new Date().toISOString(),
    };

    console.log("[UpstreamSDK] Ingest request:", {
      endpoint: this.endpoint,
      apiKey: this.apiKey ? "***" : undefined,
      payload,
    });
  }

  async ingestBatch(entries: LogEntry[]): Promise<void> {
    const payload = entries.map((entry) => ({
      ...entry,
      timestamp: entry.timestamp || new Date().toISOString(),
    }));

    console.log("[UpstreamSDK] Ingest batch request:", {
      endpoint: this.endpoint,
      apiKey: this.apiKey ? "***" : undefined,
      count: entries.length,
      payload,
    });
  }
}

export default UpstreamSDK;
