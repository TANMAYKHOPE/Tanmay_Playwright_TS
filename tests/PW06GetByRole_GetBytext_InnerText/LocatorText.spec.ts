import { Browser, chromium, Page } from "@playwright/test";

(async()=>{

let  browser:Browser = await chromium.launch({headless:false, channel:'chrome'});
 let page:Page=await  browser.newPage();

 await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
  let header=await page.getByText('Register Account', { exact: true }).textContent();
  console.log(header);




})();