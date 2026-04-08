import { Browser, chromium, expect, Page } from "@playwright/test";

/*Scenario: Validate Contact/Registration Form Submission

Given the user is on the registration/contact form page

When the user enters invalid or incomplete details in mandatory fields (First Name, Last Name, or Email)
And clicks the Submit/Register button

Then the system should display appropriate validation error messages below the respective fields
And highlight the error messages in red
And prevent form submission until all mandatory fields contain valid data

When the user enters valid First Name, Last Name, and Email details
And clicks the Submit/Register button

Then the form should be submitted successfully
And no validation error messages should be displayed */


/*When getByRole() fails:
Check:

Is element semantic?
Does it have role attribute?
Does it have accessible name?

If interviewer asks:

What are semantic roles?

You can say:

“Semantic roles define the purpose of an HTML element for browsers, automation tools, 
and assistive technologies. For example, button, textbox, link, and alert are semantic roles.
 Playwright’s getByRole() relies on these roles.” */

(async () => {

    let browser: Browser = await chromium.launch({ headless: false, channel: 'chrome' });

    let page: Page = await browser.newPage();

    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');

    await page.getByRole('link', { name: 'Register', exact: true }).click();

    await page.getByText('Privacy Policy', { exact: true }).nth(0).click();

    await page.getByRole('button', { name: 'Continue' }).click();

    //let firstNameError:string = await page.getByRole('alert', { name: 'First Name must be between 1 and 32 characters!' }).innerText();

    let firstNameError: string = await page.getByText('First Name must be between 1 and 32 characters!').innerText();
    console.log('First Name Error: ' + firstNameError);

    expect(firstNameError).toBe('First Name must be between 7!');

    



})();
