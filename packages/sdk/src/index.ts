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

export class Upstream {
    private apiKey: string | null = null;
    private host: string = 'https://up.linus.my';

    public events = {
        ingest: async (payload: EventProps | EventProps[]) => {
            if (!this.apiKey) {
                throw new Error('API key has not been configured');
            }

            // If it's a single object, wrap it in an array.
            // If it's already an array, keep it as is.
            const events = Array.isArray(payload) ? payload : [payload];

            try {
                // TODO: Implement API call to ingest endpoint
                return true;
            } catch (error) {
                return false;
            }
        }
    }

    public init(apiKey: string): void;
    public init(host: string, apiKey: string): void;
    public init(hostOrApiKey: string, apiKey?: string): void {
        if (apiKey) {
            this.host = hostOrApiKey;
            this.apiKey = apiKey;
        } else {
            this.apiKey = hostOrApiKey;
        }
    }
}

export const upstream = new Upstream();
export default Upstream;