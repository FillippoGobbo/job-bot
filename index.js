console.log("🤖 Bot avviato correttamente");

setInterval(() => {
  console.log("Bot online e in esecuzione...");
}, 30000);

const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch({ headless: true }); // invisibile
  const context = await browser.newContext();
  const page = await context.newPage();

  // Vai al sito
  await page.goto("https://carphub.it");

  // Aspetta che il bottone sia visibile
  await page.waitForSelector(
    "#root > div.min-h-screen.bg-background > header > div > div > div > a > button",
    { timeout: 5000 },
  );

  // Clicca il bottone
  await page.click(
    "#root > div.min-h-screen.bg-background > header > div > div > div > a > button",
  );

  console.log("Bottone cliccato!");

  await browser.close();
})();
