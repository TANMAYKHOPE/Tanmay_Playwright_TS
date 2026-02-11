import { Browser, chromium, Page } from "@playwright/test";

(async () => {

    let browser:Browser=await chromium.launch({

    headless:false,
    channel:'chrome',
});

    let page:Page = await browser.newPage();
    await page.goto('https://naveenautomationlabs.com/opencart/ui/webtable.html');

    //selectusercheckbox(page,`Jordan.Mathews`);

    //to get the header using CSS seletor
    //locator(`h1:text('Employee Management System')`)

  // await page.locator(`tr:has(td:text('Jordan.Mathews'))`).locator('td').first().click();

    //await page.locator(`//td[text()='Joe.Root']/preceding-sibling::td/input[@type='checkbox']`).click();

   // await selecttheuser(page,'Joe.Root');
   // await selecttheuser(page,'Jordan.Mathews');

    // xpath for  webtable based on user name:-//td[text()='Joe.Root']/preceding-sibling::td/input[@type='checkbox']
    //get all the coloume data

   //let userdata:string[]= await page.locator(`//td[text()='Joe.Root']/following-sibling::td`).allInnerTexts();
   //console.log(userdata);
  let johdata= await getuserdata(page,'Joe.Root');
  console.log(johdata);





})();

async function selecttheuser(page: Page, username: string): Promise<void> {

  await page
    .locator(`//td[text()='${username}']/preceding-sibling::td/input[@type='checkbox']`).click();

}

async function selectusercheckbox(page:Page,username:string):Promise<void>{

    await page.locator(`tr:has(td:text('${username}'))`).locator('td').first().click();
}

/**
 * this methode return  user data form other colour
 * @param page 
 * @param username 
 * @returns 
 */
async function getuserdata(page:Page,username:String):Promise<string[]>{

   return await page.locator(`//td[text()='${username}']/following-sibling::td`).allInnerTexts();
}
//https://www.espncricinfo.com/series/men-s-t20-asia-cup-2025-1496919/india-vs-pakistan-final-1496938/full-scorecard

////a[@title='Tilak Varma']/ancestor::td/following-sibling::td//span/span

