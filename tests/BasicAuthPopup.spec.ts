

import { Browser, chromium, Page } from "@playwright/test";

(async()=>{

let browser:Browser=await  chromium.launch(
    {
        headless:false,
        channel:'chrome'
    }
);

let page:Page=await browser.newPage();

await page.goto(`https://admin:admin@the-internet.herokuapp.com/basic_auth`);

})();