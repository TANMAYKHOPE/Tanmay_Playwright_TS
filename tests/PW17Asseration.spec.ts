import{test, expect , Page , Locator} from '@playwright/test'

test('Understand the Assertion concept',async()=>{

    expect(1+1).toBe(2);
    expect('playwright').toContain('playwright');
    expect([1,2,3]).toEqual([1,2,3]);




})


test('locator based assertions', async({page})=>{

await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
let  header:Locator=await page.getByText('Returning Customer',{exact: true});
await expect(header).toBeVisible();
await expect(header).toHaveText('Returning Customer');

//default time  for  expect  autowait is  5 Sec--expect come with Auto waits
/*
    Locator:  getByText('Returning Customer', { exact: true })
    Expected: "Returning Customer1"
    Received: "Returning Customer"
    Timeout:  5000ms*/

})


test('soft assertions', async ({ page}) => {
    
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    let header = page.getByText('Returning Customer', { exact: true });
    //await expect(header).toHaveText('Returning Customer1');

    //soft assertion:
    await expect.soft(header).toHaveText('Returning ');
    await expect.soft(header).toHaveText('Customer');

    console.log('Done!!');    
})
test('not assertions', async ({ page}) => {
    
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    await expect(page.locator('#error')).not.toBeVisible();
    let title = await page.title();
    expect(title).not.toContain('error');

})


test('screenshot assertions', async ({ page}) => {
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    let header = page.getByText('Returning Customer', { exact: true });
    await expect(header).toHaveScreenshot('header.png');
})
