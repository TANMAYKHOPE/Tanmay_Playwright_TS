import { Browser, chromium, FrameLocator, Locator, Page } from "@playwright/test";
(async ()=>{

    let browser:Browser=await  chromium.launch(
        {
            headless:false,
            channel:'chrome'
        }
    );

    let page:Page=await browser.newPage();
    await page.goto('https://www.formsite.com/templates/registration-form-templates/vehicle-registration-form/');
    await page.getByTitle('Vehicle-Registration-Forms-and-Examples').click();
    let frameE:FrameLocator=page.frameLocator(`iframe[id*='frame-one']`);
    await frameE.locator('#RESULT_TextField-1').fill('tanmay');



})();