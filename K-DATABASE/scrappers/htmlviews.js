const puppeteer = require('puppeteer');
const fs = require('fs');

async function htmlToImage(html, path = 'oi.png') {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.setContent(html, { waitUntil: 'networkidle0' });
  await page.setViewport({ width: 800, height: 600 });

  await page.screenshot({ path });
  await browser.close();
}

module.exports = htmlToImage;