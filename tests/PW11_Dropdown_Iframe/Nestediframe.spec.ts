import { Browser, chromium, FrameLocator, Locator, Page } from "@playwright/test";
(async ()=>{

    let browser:Browser=await  chromium.launch(
        {
            headless:true,
            channel:'chrome'
        }
    );

    let page:Page=await browser.newPage();
    await page.goto('https://selectorshub.com/iframe-scenario/');


    let F1:FrameLocator=await page.frameLocator('#pact1');
    await F1.locator('#inp_val').fill('testing');



})();