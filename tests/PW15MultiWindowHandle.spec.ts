import { chromium, Page, Locator, Browser } from "@playwright/test";

(async () => {
     const browser:Browser=await chromium.launch({channel: "chrome" , headless:false});
      const page:Page=await browser.newPage();

//create  background listner for popup event
page.on(`framenavigated`, async()=>{

let acceptcookiesbutton=page.locator(`#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll`);
if(await acceptcookiesbutton.isVisible()){
    await acceptcookiesbutton.click();}

});




       await page.goto(`https://orangehrm.com/en/contact-sales`);
       await page.waitForTimeout(3000);
       //await page.locator(`#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll`).click();

       //note :- target="_blank" is used to open the link in new tab/window
       //note :- we can use page.waitForEvent("popup") to handle the new tab/window

      let[newTab]=await Promise.all([
        page.waitForEvent("popup"),
        
        page.locator(`//a[contains(@href, 'linkedin')]`).click()

       ]);
         await page.waitForTimeout(3000);
       console.log(await newTab.title());
       console.log( newTab.url()); 

       /*two tab open---OrangeHRM | LinkedIn
         https://www.linkedin.com/company/orangehrm*/

         //closed the  child  window---new tab/window closed

         await newTab.close();
         await page.waitForTimeout(3000);
         console.log(await page.title());
         console.log(page.url());









})();