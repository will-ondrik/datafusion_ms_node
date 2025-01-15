declare module 'chrome-launcher' {
    export interface ChromeLauncher {
        port: number;
        pid?: number;
        process?: number;
        kill(): Promise<void>;
    }

    export function launch(options?: {
        startingUrl?: string;
        chromeFlags?: string[];
        port?: number;
        logLevel?: 'info' | 'error' | 'silent';
    }): Promise<ChromeLauncher>;
}