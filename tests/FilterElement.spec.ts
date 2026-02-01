import { Browser, chromium, Locator, Page } from "@playwright/test";

(async()=>{

let browser:Browser=await chromium.launch({

    headless:false,
    channel:'chrome',
});

let page:Page=await browser.newPage();
//await page.goto('https://www.amazon.co.in');
//await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
//let allFooterElement:Locator=await page.locator('footer a');
//use case 1:-filter 
//allFooterElement.filter({hasText:'Privacy policy', visible:true}).click();

//what if privacy policty link =5 , used  filter  to sort out this issue

/*Use case  2:-   
step:-Go to Google.com
step:-Type selenium testing in search bar
step:-Capture all result
step:-apply  filter 
step:-match filter text and clikc  on it*/

// await page.goto('https://www.google.com/');
// await page.locator(`[name='q']`).fill('Selenium Testing');
// await page.locator(`ul[role='listbox'] li div[role='option']`).filter({hasText:'Jobs'}).click();

//use case  3--same for Flipcart
await page.goto('https://www.flipkart.com/');
await page.getByPlaceholder('Search for Products, Brands and More').fill('mackbook');




})();