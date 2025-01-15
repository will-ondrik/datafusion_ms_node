
import lighthouse, { RunnerResult } from 'lighthouse';
import * as chromeLauncher from 'chrome-launcher';

class LighthouseService {
    constructor() {
        this.runAudit = this.runAudit.bind(this);
    }

    async runAudit(url: string): Promise<RunnerResult | undefined> {
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