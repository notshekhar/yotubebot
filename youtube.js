let puppeteer = require("puppeteer")
let i = 0

async function delay(s) {
  return await new Promise(resolve => {
    setTimeout(resolve, s)
  })
}
let browser
(async ()=>{
  browser = await puppeteer.launch()
  await action()
})()

async function action(){
  let page = await browser.newPage()
  await page.goto("https://www.youtube.com/watch?v=eZkAxnuOrFw&feature=youtu.be")
  await page.waitForSelector("#owner-name > a")
  await page.click("#movie_player > div.ytp-chrome-bottom > div.ytp-chrome-controls > div.ytp-left-controls > button")
  await delay(500)
  await console.log(i++)
  await page.close()
  await action()
}

