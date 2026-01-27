import { test, expect, chromium, Page, Locator } from '@playwright/test';

test('Session Storage login store  Test', async ({ page }) => {

    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    await page.locator('#input-email').fill('tanmayqa323@gmail.com');
    await page.locator('#input-password').fill('13Fb@1993');
    let button = await page.getByRole('button', { name: 'Login' });
    await button.click();
    await page.waitForURL('https://naveenautomationlabs.com/opencart/index.php?route=account/account');

    await page.context().storageState({ path: 'auth/sessionStorage.json' });




})