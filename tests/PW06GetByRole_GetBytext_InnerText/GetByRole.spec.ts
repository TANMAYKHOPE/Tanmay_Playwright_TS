import { Browser, chromium, Page } from "@playwright/test";

(async()=>{
    const browser:Browser= await chromium.launch({headless:false, channel:'chrome'});
     let page:Page=await browser.newPage();
     await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
     await page.getByRole('textbox',{name:'* First Name'}).fill('tanmayKK');
     //textbox is role and name is label of the textbox--lable or aria-label mus  required for  getByRole() method
     //radio button if have lable
     await page.getByRole('radio',{name:'yes'}).click(); 

     //link have text so used  that as lable in getByRole() method
     //await page.getByRole('link', {name:'Forgotten Password'}).click();
     const  header:string=await page.getByRole('heading', {name:'Register Account'}).innerText();
     console.log(header);
    
    
    })();
    
