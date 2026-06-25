import { Browser, chromium, Locator, Page } from "@playwright/test";

(async()=>{

let  browser:Browser=await   chromium.launch({
   headless:false,
   channel:'chrome'

   })

   let page:Page= await browser.newPage();
   await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');

    let  innerHTML= await page.getByRole('heading', {name: 'Register Account'}).innerHTML();
    let  innerHTML2= await page.getByRole('heading', {name: 'Register Account'}).textContent();

    console.log(innerHTML);
     console.log(innerHTML2);
})();