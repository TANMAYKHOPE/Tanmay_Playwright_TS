
//select+option=select tag based dropdown

import { Browser, chromium, expect, Locator, Page } from "@playwright/test";

(async () => {

    let browser:Browser=await chromium.launch({

    headless:false,
    channel:'chrome',
});

    let page:Page = await browser.newPage();
    await page.goto('https://www.facebook.com/r.php/');
    let day= page.locator('#day');
   
    let Year=page.locator('#year');
     let month=page.locator('#month');

    //select  by value atrribute

   // await day.selectOption('13');
   // await month.selectOption('Feb');
   // await page.waitForTimeout(3000);
   // await Year.selectOption('1993');

    //select  by visible text--lable


   // await day.selectOption({label:'15'});

    await SelectDropdownbyvalue(month,'12');
    await SelectDropdownbyvalue(day,'22');
    await SelectDropdownbyvalue(Year,'2002');



})();

async function SelectDropdownbyvalue(element:Locator, value:string): Promise<void>{

    await element.selectOption(value);
    await expect(element).toHaveValue(value);
    
}

