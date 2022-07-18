const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: false, slowMo: 25, devtools: true });
  const page = await browser.newPage();
  await page.goto('https://pptr.dev/', {
    waitUntil: 'networkidle2',
  });

  await page.evaluate(() => {
    const background = document.querySelector('.navbar');
    background.style.background = '#1F54C0';
  });
  await page.screenshot({ path: '../images/changedBackground.png' });

  await browser.close();
})();

(async () => {
  // PDF creation is only supported in headless mode
  const browser = await puppeteer.launch({ headless: true, slowMo: 200 });
  const page = await browser.newPage();
  await page.goto('https://pptr.dev/');
  await page.focus('.navbar__search-input');
  await page.keyboard.type('pdf');
  await page.evaluate(() => {
    const input = document.querySelector('.navbar__search-input');
    const KEY_CODE_ENTER = 13;
    const evt = new Event('keydown');
    evt.keyCode = KEY_CODE_ENTER;
    input.dispatchEvent(evt);
  });
  await page.pdf({ path: '../pdf/enterOnInput.pdf', format: 'a4' });

  await browser.close();
})();
