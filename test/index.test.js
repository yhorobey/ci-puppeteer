const puppeteer = require('puppeteer');
const URL = 'http://yatsun.me/test';
let browser, page;

beforeAll(async() => {
	browser = await puppeteer.launch({args: ['--proxy-server=127.0.0.1:8080', '--no-sandbox']});
    page = await browser.newPage();
    await page.setViewport({ width: 1366, height: 768 });
});

describe('Compass Smart Tag', () => {

	it('Test page contains a compass tag', async() => {
	    await page.goto(URL);

	    const text = await page.$eval('h1', (element) => {
		  return element.innerHTML;
		});

	    expect(text).toBe('Welcome');
	});

});

afterAll(async() => {
	browser.close();
});