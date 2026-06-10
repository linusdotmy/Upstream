//                                  __
//                                 |  \
//  __    __   ______    _______  _| $$_     ______    ______    ______   ______ ____
// |  \  |  \ /      \  /       \|   $$ \   /      \  /      \  |      \ |      \    \
// | $$  | $$|  $$$$$$\|  $$$$$$$ \$$$$$$  |  $$$$$$\|  $$$$$$\  \$$$$$$\| $$$$$$\$$$$\
// | $$  | $$| $$  | $$ \$$    \   | $$ __ | $$   \$$| $$    $$ /      $$| $$ | $$ | $$
// | $$__/ $$| $$__/ $$ _\$$$$$$\  | $$|  \| $$      | $$$$$$$$|  $$$$$$$| $$ | $$ | $$
//  \$$    $$| $$    $$|       $$   \$$  $$| $$       \$$     \ \$$    $$| $$ | $$ | $$
//   \$$$$$$ | $$$$$$$  \$$$$$$$     \$$$$  \$$        \$$$$$$$  \$$$$$$$ \$$  \$$  \$$
//           | $$
//           | $$
//            \$$

import { EventProps } from './types';

export class UpstreamClient {
    private apiKey: string;
    private host: string;

    constructor(hostOrApiKey: string, apiKey?: string) {
        if (apiKey) {
            this.host = hostOrApiKey;
            this.apiKey = apiKey;
        } else {
            this.host = 'https://up.linus.my';
            this.apiKey = hostOrApiKey;
        }
    }

    public events = {
        ingest: async (payload: EventProps | EventProps[]) => {
            if (!this.apiKey) {
                throw new Error('API key has not been configured');
            }

            const events = Array.isArray(payload) ? payload : [payload];

            // TODO: Implement API call to ingest events
            return true;
        }
    }
}

interface UpstreamFactory {
    init(apiKey: string): UpstreamClient;
    init(host: string, apiKey: string): UpstreamClient;
}

export const Upstream: UpstreamFactory = {
    init(hostOrApiKey: string, apiKey?: string): UpstreamClient {
        return new UpstreamClient(hostOrApiKey, apiKey);
    }
};

export default UpstreamClient;