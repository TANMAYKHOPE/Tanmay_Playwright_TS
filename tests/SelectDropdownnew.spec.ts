

//https://naveenautomationlabs.com/opencart/ui/dropdowns.html

import { chromium, Page } from "@playwright/test";

((async ()=> {

    let browser= await chromium.launch({

  headless:false,
    channel:'chrome',
});

let page:Page=await browser.newPage();
await page.goto('https://naveenautomationlabs.com/opencart/ui/dropdowns.html');
/*await page.locator(`//div[@class='select-trigger']//span[text()='Choose your preferred programming language']`).click();
await page.getByText('JavaScript').click();

await page.locator(`//div[@class='select-trigger']//span[text()='Choose your preferred web framework']`).click();
await page.getByText('Angular').click();

await page.waitForTimeout(30000);

await page.locator(`//div[@class='select-trigger']//span[text()='Choose your preferred database system']`).click();
await page.getByText('MySQL').click();

await page.locator(`//div[@class='select-trigger']//span[text()='Select deployment platform']`).click();
await page.getByText('Amazon Web Services (AWS)').click();

await page.locator(`//div[@class='select-trigger']//span[text()='Choose your code editor/IDE']`).click();
await page.getByText('Xcode').click();

await page.locator(`//div[@class='select-trigger']//span[text()='Select your experience level']`).click();
await page.getByText('Mid-level (4-6 years)').click();*/

await SelectValue(page, 'Choose your preferred programming language', 'Ruby');



////div[@class='select-trigger']//span[text()='Choose your preferred programming language']
//getByText('JavaScript')



}))();

async function SelectValue(page:Page,dropdownlable:string, value:string):Promise<void>{
    
await page.locator(`//div[@class='select-trigger']//span[text()='${dropdownlable}']`).click();

await page.getByText(`${value}`,{ exact: true }).click();



}


async function SelectRandomValue(page: Page, dropdownLabel: string): Promise<void> {
  // Click the dropdown trigger
  const trigger = page.locator(`//div[@class='select-trigger']//span[text()='${dropdownLabel}']`);
  await trigger.click();

  // Grab all options inside the dropdown
  const options = page.locator(`//div[contains(@class,'custom-options')]//span`);
  const count = await options.count();

  if (count === 0) {
    throw new Error(`No options found for dropdown: ${dropdownLabel}`);
  }

  // Pick a random index
  const randomIndex = Math.floor(Math.random() * count);

  // Get the text of the random option (optional, for logging)
  const randomText = await options.nth(randomIndex).innerText();
  console.log(`Selected random option: ${randomText}`);

  // Click the random option
  await options.nth(randomIndex).click();
}

//Assingment:-https://react-select.com/home