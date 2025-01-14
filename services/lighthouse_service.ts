/**
 import lighthouse from 'lighthouse';
import fs from 'fs';
import * as chromeLauncher from 'chrome-launcher';


url = 'https://ondrik.dev/test/testAnalytics.html'
const chrome = await chromeLauncher.launch({chromeFlags: ['--headless']});
const options = {logLevel: 'info', output: 'html', onlyCategories: ['performance', 'seo', 'accessibility'], port: chrome.port};
const runnerResult = await lighthouse(/**URL here, options here);

 .report is the HTML report as a string
const reportHTML = runnerResult.report;

.lhr is the Lighthouse result as a js obj



chrome.kill();

 */