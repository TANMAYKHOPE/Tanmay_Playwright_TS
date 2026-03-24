
import { Browser, FrameLocator, Locator, Page, chromium } from "@playwright/test";
(async () => {
    let browsser:Browser=await chromium.launch({

    headless:false,
    channel:'chrome',
});

let page:Page=await browsser.newPage(); 




})();