//with  test  block
import{test, expect,chromium}from'@playwright/test';

test('check the page  titile of google',async({browser,page})=>{
browser=await chromium.launch({headless:false});
page=await browser.newPage();
await page.goto('https://www.google.com/');
let title:string=await page.title();//whenever funcion return promose we have to use await
console.log("The title of the page is :"+title);
expect(title).toBe('Google');

})