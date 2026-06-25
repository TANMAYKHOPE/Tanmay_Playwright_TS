import { test, expect } from '@playwright/test';

test('Select Hong Kong checkbox from paginated table', async ({ page }) => {

    await page.goto(
        'https://selectorshub.com/xpath-practice-page',
        {
            waitUntil: 'domcontentloaded'
        }
    );

    // Scroll to the pagination table
    await page.locator("//h2[contains(text(),'Test Case')]").scrollIntoViewIfNeeded();

    while (true) {

        const hongKongRow = page.locator("//td[text()='Hong Kong']");

        // Check whether Hong Kong exists on current page
        if (await hongKongRow.count() > 0) {

            await page.locator(
                "//td[text()='Hong Kong']/preceding-sibling::td//input[@type='checkbox']"
            ).check();

            console.log('✅ Hong Kong Found and Checkbox Selected');
            break;
        }

        const nextButton = page.getByRole('link', { name: 'Next' });

        // Stop if Next button is disabled
        const nextDisabled =
            (await nextButton.getAttribute('aria-disabled')) === 'true';

        if (nextDisabled) {
            throw new Error('❌ Hong Kong not found in any page');
        }

        await nextButton.click();

        // Wait for next page data to load
        await page.waitForTimeout(1000);
    }

});