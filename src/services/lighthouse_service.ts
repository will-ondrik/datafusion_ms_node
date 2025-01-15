
import lighthouse, { RunnerResult } from 'lighthouse';
import fs from 'fs';
import * as chromeLauncher from 'chrome-launcher';


class LighthouseService {
    constructor() {

    }

    async runAudit(url: string) {
        const chrome = await chromeLauncher.launch({ chromeFlags: ['--headless']});
        const options = {
            logLevel: 'info' as 'info', 
            output: 'json' as 'json',
            onlyCategories: [
                'performance',
                'seo',
                'accessibility',
            ],
            port: chrome.port,
        };

        const runnerResult: RunnerResult | undefined = await lighthouse(url, options);
        
        chrome.kill();
    }


}

export default LighthouseService;