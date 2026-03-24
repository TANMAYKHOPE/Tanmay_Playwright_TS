import { Browser, Locator, chromium,Page } from "@playwright/test";

(async()=>{

let browser:Browser=await chromium.launch({channel:'chrome',
headless:false});

let page:Page= await browser.newPage();


//pascreenshot
await page.goto('https://orangehrm.com/');

//await page.screenshot({path:'screenshot.png', fullPage:false});
//await page.screenshot({path:'./Screenshot/myscreenshot.png', fullPage:true});

await page.screenshot(
    {path:'./Screenshot/Randome.png', 
        clip:{x:0, y:0, width:800, height:600}});

        //elelemt screenshot

 
    let logo:Locator=await page.getByRole('img', { name: 'OrangeHRM Logo' }).nth(0);
    await  logo.screenshot({path:'./Screenshot/Logo.png'});
await page.locator(`#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll`).click();
    let contractsale:Locator=await page.getByRole('button', { name: 'Contact Sales' }).nth(0);
    contractsale.click();

    await page.waitForTimeout(3000);
    let  formtable:Locator=await page.locator('.form-main-menu');

    await  formtable.screenshot({path:'./Screenshot/formtable.png'});







})();