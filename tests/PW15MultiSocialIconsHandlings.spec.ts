import { chromium, Page, Browser } from "@playwright/test";

(async () => {
  const browser: Browser = await chromium.launch({ channel: "chrome", headless: false });
  const page: Page = await browser.newPage();

  await page.goto(`https://orangehrm.com/en/contact-sales`);
  await page.waitForTimeout(3000);

  await page.locator(`#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll`).click();

  // All social media locators
  const socialLinks = [
    "//a[contains(@href,'facebook')]",
    "//a[contains(@href,'linkedin')]",
    "//a[contains(@href,'twitter') or contains(@href,'x.com')]",
    "//a[contains(@href,'youtube')]"
  ];

  // Loop through each icon
  for (const link of socialLinks) {

    const [newTab] = await Promise.all([
      page.waitForEvent("popup"),
      page.locator(link).click()
    ]);

    await newTab.waitForLoadState();

    console.log("Title:", await newTab.title());
    console.log("URL:", newTab.url());

    await newTab.close();
  }
  await page.waitForTimeout(3000);
  console.log("Parent Page Title:", await page.title());
  console.log("Parent URL:", page.url());

  await browser.close();

})();