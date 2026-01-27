import { test, expect, chromium, Page, Locator } from '@playwright/test';

//test.use({ storageState: 'auth/sessionStorage.json' });

/*
work for 
sid, cookies,session id
not work for
auth tokens saved in session storage, 3rd party coockes
opt*/

test('login with sessionstorage and  nevigate to account page Test', async ({ page }) => {

   await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=checkout/cart');
    await page.waitForTimeout(3000);




});