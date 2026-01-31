import { Browser, chromium, Page } from "@playwright/test";

(async () => {

let  browser:Browser=await chromium.launch({
headless:false, channel:'chrome'

});

let page:Page=await browser.newPage();
await page.goto('https://www.freshworks.com/');
// h1 to h6 header-heading
let header:string=await page.getByRole('heading',{name:'Uncomplicate'}).innerText();
console.log("Header is "+header);
//span -getbyrole cannot be used for span

let header2:string=await page.getByText('Freshworks provides').innerText();
console.log("Header is "+header2);

//


})();