import { Browser, chromium, Page } from 'playwright';

(async () => {

  // 1️⃣ Launch Browser
  const browser:Browser = await chromium.launch({ headless: false });
  //const context = await browser.newContext();
  const page:Page = await browser.newPage();

  // 2️⃣ Navigate to MakeMyTrip
  await page.goto('https://www.makemytrip.com/');
  await page.waitForLoadState('domcontentloaded');

  // 3️⃣ Close login popup (if present)
  //await page.waitForTimeout(2000); // Wait for potential popup to appear
 // await page.locator('//span[@data-cy="closeModal"]').click().catch(() => {});

  // 4️⃣ Click on Cabs tab
  await page.locator('//span[text()="Cabs"]').click();

  // 5️⃣ Select From City
  await page.locator('//label[@for="fromCity"]').click();
  await page.locator('//input[@placeholder="From"]').fill('Mumbai');
  await page.locator('//p[text()="Mumbai, India"]').first().click();

  // 6️⃣ Select To City
  await page.locator('//label[@for="toCity"]').click();
  await page.locator('//input[@placeholder="To"]').fill('Pune');
  await page.locator('//p[text()="Pune, India"]').first().click();

  // 7️⃣ Open Calendar
  await page.locator('//label[@for="departure"]').click();

  // 🎯 Calendar function using WHILE loop
  async function selectDate(targetMonthYear: string, targetDay: string) {

    let maxAttempts = 12;

    while (maxAttempts--) {

      const monthText = await page.locator('//div[contains(@class,"DayPicker-Caption")]').first().innerText();

      if (monthText.includes(targetMonthYear)) {
        break;
      }

      await page.locator('//span[@aria-label="Next Month"]').click();
      await page.waitForTimeout(500);
    }

    await page.locator(`//p[text()='${targetDay}']`).click();
  }

  // 8️⃣ Select Date → Example
  await selectDate('May 2026', '18');

  // 9️⃣ Click Search
  await page.locator('//a[text()="Search"]').click();

  // 🔟 Optional wait to observe result
  await page.waitForTimeout(5000);

  // 1️⃣1️⃣ Close browser
  await browser.close();

})();