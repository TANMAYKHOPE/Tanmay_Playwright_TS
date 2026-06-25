import {test, expect, Page, Locator } from '@playwright/test'


test('value of asserations', async()=>{

expect (1+1).toBe(2);
expect('playwright').toContain('play');
expect(true).toBeTruthy();

});


test('locator based asseration ', async({page})=>{

await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
let header= page.getByText('Returning Customer',{exact : true} );
await expect(header).toBeVisible();


})

test('soft asseration concept', async({page})=>{

await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
let header= page.getByText('Returning Customer',{exact : true} );
await expect.soft(header).toHaveText('Returning Customer 1');
console.log('Done');


})

test('Screenshot assertions', async({page})=>{
await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
let header= page.getByText('Returning Customer',{exact : true} );
await expect(header).toHaveScreenshot('header.png');

})


test('elelemt is visible , enable , disbale assertions', async({page})=>{

await page.goto('https://classic.freecrm.com/register/');

let checkbox=page.getByLabel('I agree with the terms and conditions.')
let submitbutton=page.getByRole('button', { name: 'SUBMIT' });

await expect(checkbox).not.toBeChecked();
await expect(submitbutton).toBeDisabled();
await expect(submitbutton).toBeVisible();
await checkbox.check();


await expect(checkbox).toBeChecked();
await expect(submitbutton).toBeEnabled();
await expect(submitbutton).toBeVisible();


})


