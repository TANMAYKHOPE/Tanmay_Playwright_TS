import { test, expect, chromium, Page, Locator } from '@playwright/test';

//Optional paramer
//DOM is come first when we hit the url and  then page  loaded
//referer,timeout--
test('Page goto methode optional parameter test', async ({ page }) => {

    await page.goto('https://www.amazon.com/', { referer: 'www.abc.com' });
    let title = await page.title();
    console.log("Title of the page is " + title);


})