import { Browser, chromium, Locator, Page } from "@playwright/test";

(async () => {

let  browser:Browser=await chromium.launch({
headless:false, channel:'chrome'

});

let page:Page=await browser.newPage();
    await page.goto('https://api.cogmento.com/register/');
    let submitbutton:Locator= page.locator('#sign-in-btn');
    let visible:boolean= await submitbutton.isVisible();
    console.log("Is Submit button visible: "+visible);

})();