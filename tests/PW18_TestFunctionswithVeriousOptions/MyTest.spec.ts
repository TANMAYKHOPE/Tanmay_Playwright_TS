import { test, expect } from '@playwright/test';

test('title of test', async ({ page, browserName }) => {
   test.skip(browserName==='firefox', 'this test not required to run in firefox')
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    await expect(page).toHaveTitle('Account  Login');


});

test('url  test', async ({ page }) => {

    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    await expect(page).toHaveURL(/.*account\/login*/)



});



test('header visibility  test', async ({ page }) => {

    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    await expect(page.getByText('Returning Customer', {exact: true})).toBeVisible();



});


test.skip('header visibility  test skip kardo bsdk', async ({ page }) => {

    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    await expect(page.getByText('Returning Customer', {exact: true})).toBeVisible();



});
