import { Browser, chromium, Page } from "@playwright/test";

(async () => {

    let browser:Browser=await chromium.launch({

    headless:false,
    channel:'chrome',
});

    let page:Page = await browser.newPage();
    await page.goto('https://naveenautomationlabs.com/opencart/ui/webtable.html');

    //await page.locator(`//td[text()='Joe.Root']/preceding-sibling::td/input[@type='checkbox']`).click();

    await selecttheuser(page,'Joe.Root');
    await selecttheuser(page,'Jordan.Mathews');

    // xpath for  webtable based on user name:-//td[text()='Joe.Root']/preceding-sibling::td/input[@type='checkbox']

})();

async function selecttheuser(page: Page, username: string): Promise<void> {

  await page
    .locator(`//td[text()='${username}']/preceding-sibling::td/input[@type='checkbox']`).click();

}
