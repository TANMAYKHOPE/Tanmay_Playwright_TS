import { test, expect, Page, Locator } from '@playwright/test'

test('Webtable pagination selector', async ({ page }) => {

    await page.goto('https://selectorshub.com/xpath-practice-page', {
            waitUntil: 'domcontentloaded'
        });

    while (true) {

        let eleExit = await page.locator(`//td[text()='Hong Kong']`).isVisible();
        if (eleExit) {
            console.log('Element is  found');

            await page.locator(` //td[text()='Hong Kong']/preceding-sibling::td/input[@type='checkbox']`).click();
            break;

        }
        //click on arrow icon nextpage:- paginations  logic

        let next=await page.getByRole('link', { name: 'Next' });
        await next.click();
        await next.highlight();


    }

    await page.pause();

})