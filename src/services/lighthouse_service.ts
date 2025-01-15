
import lighthouse, { RunnerResult } from 'lighthouse';
import fs from 'fs';
import * as chromeLauncher from 'chrome-launcher';


class LighthouseService {
    constructor() {
        console.log('initializing lighthouse service')
        this.runAudit = this.runAudit.bind(this);
    }

    async runAudit(url: string): Promise<RunnerResult | undefined> {
        console.log('Running audit for url:', url);
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
        
        console.log('runnerResult', runnerResult);
        return runnerResult;
        
    }


}

export default LighthouseService;