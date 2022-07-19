const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: { width: 8000, height: 8000 },
  });
  const page = await browser.newPage();
  await page.goto('https://pptr.dev/', {
    waitUntil: 'domcontentloaded',
  });

  await page.screenshot({
    path: './images/part1.png',
    clip: {
      x: 0,
      y: 0,
      width: 4000,
      height: 4000,
    },
  });

  await page.screenshot({
    path: './images/part2.png',
    clip: {
      x: 4000,
      y: 0,
      width: 4000,
      height: 4000,
    },
  });

  await page.screenshot({
    path: './images/part3.png',
    clip: {
      x: 0,
      y: 4000,
      width: 4000,
      height: 4000,
    },
  });

  await page.screenshot({
    path: './images/part4.png',
    clip: {
      x: 4000,
      y: 4000,
      width: 4000,
      height: 4000,
    },
  });

  await page.goto('file:///D:/MyProjects/Onix/Nodejs-internship/6-task-puppeteer/src/index.html', {
    waitUntil: 'domcontentloaded',
  });
  await page.screenshot({
    path: './images/parts1-4.png',
    fullPage: true,
  });

  await browser.close();
})();
