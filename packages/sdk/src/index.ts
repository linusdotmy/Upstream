import { EventProps } from './types';

export type {
    EventProps,
    Field,
    TimelineEvent,
    Action,
} from './types';

const DEFAULT_HOST = 'https://up.linus.my';

type UpstreamOptions = {
    host?: string
}

export class Upstream {
    private apiKey: string;
    private host: string;

    constructor(apiKey: string, options?: UpstreamOptions) {
        this.apiKey = apiKey;
        this.host = options?.host ?? DEFAULT_HOST;
    }

    public events = {
        ingest: async (payload: EventProps) => {
            const url = `${this.host}/api/events/ingest`;

            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${this.apiKey}`,
                },
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                const body = await response.text();
                throw new Error(`Upstream API error (${response.status}): ${body}`);
            }

            return response.json();
        }
    }
}
