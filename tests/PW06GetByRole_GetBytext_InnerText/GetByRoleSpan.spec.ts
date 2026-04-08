import { Browser, chromium, Page } from "@playwright/test";

(async()=>{
let browser:Browser=await chromium.launch({headless:false, channel:'chrome'});
let page:Page= await browser.newPage();
await page.goto('https://www.freshworks.com/');

//span/div/ p--> with text dont support  getByRole , used getByText() method or best used is CSS/Xpaths


let secondheader:string=await page.getByText('Freshworks provides').innerText();
console.log(secondheader);
/*
page.getByRole('heading', { name: 'Tanmay', level: 2 })
What it means
This uses ARIA role-based locator 
(recommended in Playwright for stability and accessibility)
getByRole('heading')
Targets elements with semantic role heading (<h1> to <h6>).
name: 'Tanmay'
Matches the visible text (accessible name) of the heading.
Equivalent to something like: <h2>Tanmay</h2>
level: 2
Specifies heading level → <h2>
Ensures you're selecting only h2, not h1/h3/etc.
Why this is useful (Real-time scenarios)

1. Profile / Dashboard validation
Example:
After login, user name is shown as heading
await expect(page.getByRole('heading', { name: 'Tanmay', level: 2 })).toBeVisible();
👉 Ensures correct user is logged in
2. Dynamic content verification
Example:
CRM / HRM system (like your FreeCRM use case)
Contact name appears as heading
await page.getByRole('heading', { name: 'Tanmay', level: 2 }).click()
👉 Selects specific contact from list

3. Avoid fragile locators
Instead of ❌
page.locator('//h2[text()="Tanmay"]')
Use ✅
page.getByRole('heading', { name: 'Tanmay', level: 2 })*/
//getbyrole--dropdown--combobox



})();