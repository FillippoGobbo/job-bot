const { chromium } = require("playwright");

(async () => {
  console.log("🤖 Avvio test Playwright");

  // Headless obbligatorio su Render
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  const URL = "https://carphub.it/";
  console.log("🌍 Vado su:", URL);

  await page.goto(URL, { waitUntil: "networkidle" });
  console.log("✅ Pagina caricata");

  const selector =
    "#root > div.min-h-screen.bg-background > header > div > div > div > a > button";
  console.log("🔍 Cerco il bottone...");

  await page.waitForSelector(selector, { timeout: 15000 });
  console.log("✅ Bottone trovato");

  const text = await page.textContent(selector);
  const box = await page.locator(selector).boundingBox();

  console.log("📝 Testo bottone:", text?.trim());
  console.log("📐 Posizione bottone:", box);

  console.log("🖱️ CLICK!");
  await page.click(selector);
  console.log("🎉 Bottone cliccato correttamente");

  await page.waitForTimeout(4000); // solo per vedere cosa succede
  await browser.close();

  console.log("🛑 Browser chiuso, test finito");
})();
