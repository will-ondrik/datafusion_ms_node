declare module 'lighthouse' {
    export interface LighthouseOptions {
        logLevel: 'info' | 'error' | 'debug';
        output: 'json' | 'html' | 'csv';
        onlyCategories?: string[];
        port?: number;
    }

    export interface RunnerResult {
        lhr: {
            categories: {
                performance?: { score: number };
                accessibility?: { score: number };
                seo?: { score: number };
            };
        };
    }

    export default function lighthouse(url: string, options: LighthouseOptions): Promise<RunnerResult>;
}