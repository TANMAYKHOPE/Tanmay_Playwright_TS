import { Browser, chromium, Page } from "@playwright/test";

(async () => {

let  browser:Browser=await chromium.launch({
headless:false, channel:'chrome'

});

let page:Page=await browser.newPage();
/*await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
//img - getbyrole--name is alt attribute
page.getByRole('img',{name:'naveenopencart'}).highlight();*/
page.goto('https://www.freshworks.com/');




})();