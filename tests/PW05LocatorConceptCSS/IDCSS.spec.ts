import { Browser, chromium, Locator, Page } from "@playwright/test";

(async()=>{

    let browser:Browser=await chromium.launch({
        headless:false, channel:'chrome'
    });

    let page:Page=await browser.newPage();
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');

    //Find element and  perform action on it
   // await page.locator('#input-email').fill('tanmayqa323@gmail.com');
   // await page.locator('#input-password').getAttribute('name').then((value)=>{
        //console.log("The attribute value is: "+value);
   // });
    //await page.locator(`input[value='Login']`).click();
//page locator without action

//let login:Locator =page.locator(`input[value='Login']`);

//await login.fill('DDDDD');

//when  perform action then provide the await

let  header:string|null=await page.getByText('Account').nth(1).textContent();
console.log(header);

let xpath:string|null=await page.locator(`//h2[text()='New Customer']`).textContent();
console.log(xpath);



})();