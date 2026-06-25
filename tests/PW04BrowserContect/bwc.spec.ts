import { chromium, devices } from '@playwright/test';

async function runTest() {

    const iPhone = devices['iPhone 13'];

    const browser = await chromium.launch({
        headless: false
    });

    // Create Browser Context
    const context = await browser.newContext({
        ...iPhone
    });

    // Create Page from Context
    const page = await context.newPage();

    await page.goto(
        'https://naveenautomationlabs.com/opencart/index.php?route=account/login'
    );

    // Fill Login Details
    await page.locator('#input-email').fill('test@test.com');
    await page.locator('#input-password').fill('Password123');

    // Click Login Button
    await page.locator("input[value='Login']").click();

    // Print Page Title
    console.log(await page.title());

    await page.waitForTimeout(5000);

   // await browser.close();
}

runTest();