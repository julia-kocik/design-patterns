// Converts interface of a class into another interface clients expect.
{
    interface IHttpClient {
        get(url: string): Promise<Response>;
        post(url: string): Promise<Response>;
        put(url: string): Promise<Response>;
        delete(url: string): Promise<Response>;
    }
    
    class Client {
        public constructor(
            private readonly _httpClient: IHttpClient
        ) {}
    
        public async call(): Promise<void> {
            const response = await this._httpClient.get('localhost:8080/status');
    
            if (response.status !== 200) {
                throw new Error('Service unavailable!');
            }
        }
    }
    
    class HttpClient implements IHttpClient {
        public constructor(
            private readonly _legacyHttpClient: LegacyHttpClient = new LegacyHttpClient()
        ) {}
    
        public async get(url: string): Promise<Response> {
            return this._legacyHttpClient.request(url, 'GET', { headers: this._getHttpHeaders() });
        }
    
        public async post(url: string): Promise<Response> {
            return this._legacyHttpClient.request(url, 'POST', { headers: this._getHttpHeaders() });
        }
    
        public async put(url: string): Promise<Response> {
            return this._legacyHttpClient.request(url, 'PUT', { headers: this._getHttpHeaders() });
        }
    
        public async delete(url: string): Promise<Response> {
            return this._legacyHttpClient.request(url, 'DELETE', { headers: this._getHttpHeaders() });
        }
    
        private _getHttpHeaders(): Record<string, unknown> {
            return { /* HTTP Headers*/ };
        }
    }
    
    class LegacyHttpClient {
        public async request(url: string, method: string, data: Record<string, unknown>): Promise<Response> {
            // Simulate an asynchronous operation, e.g., using a timeout
            await new Promise(resolve => setTimeout(resolve, 1000));
    
            // Simulate an HTTP response
            return new Response(JSON.stringify({}), {
                status: 200,
                statusText: 'OK',
                headers: new Headers({ 'Content-Type': 'application/json' })
            });
        }
    }
    
}