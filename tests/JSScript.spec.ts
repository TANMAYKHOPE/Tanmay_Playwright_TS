
import { Browser, Page, chromium } from "@playwright/test";
(async () => {
    let browsser:Browser=await chromium.launch({

    headless:false,
    channel:'chrome',
});

let page:Page=await browsser.newPage(); 
//Add  event  listener for dialog

page.on('dialog', async dialog => {
    console.log(dialog.message());
    //await dialog.accept();
    await dialog.dismiss();
    //await dialog.accept('Playwright');
    
    //console.log(dialog.defaultValue());
    //console.log(dialog.type());
   
    //console.log(dialog.page());

})




await page.goto(`https://the-internet.herokuapp.com/javascript_alerts`)

await page.getByRole('button', { name: 'Click for JS Alert' }).click();
//await page.getByText(`Click for JS Confirm`).click();
//await page.getByText(`Click for JS Prompt`).click();

})();