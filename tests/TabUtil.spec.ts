import { Browser, chromium, Page } from "@playwright/test";

// --- 1. Common Utility Class ---
class CommonUtils {

    // Utility: Generate a random email with a timestamp
    static getRandomEmail(): string {
        return `opencart_${Date.now()}@gmail.com`;
    }

    // Utility: Fills a specific input field and automatically presses Tab
    static async fillAndTab(page: Page, selector: string, text: string) {
        await page.locator(selector).pressSequentially(text, { delay: 200 });
        await page.keyboard.press("Tab");
    }

    // Utility: Helper to handle generic keyboard press
    static async pressKey(page: Page, key: string) {
        await page.keyboard.press(key);
    }
}

// --- 2. Main Execution Script ---
(async () => {

    const browser: Browser = await chromium.launch({
        headless: false,
        channel: "chrome",
    });

    const page: Page = await browser.newPage();

    try {
        await page.goto(
            "https://naveenautomationlabs.com/opencart/index.php?route=account/register"
        );

        await CommonUtils.fillAndTab(page, "#input-firstname", "Tanmay");
        await CommonUtils.fillAndTab(page, "#input-lastname", "QA");
        await CommonUtils.fillAndTab(page, "#input-email", CommonUtils.getRandomEmail());
        await CommonUtils.fillAndTab(page, "#input-telephone", "8998898989");
        await CommonUtils.fillAndTab(page, "#input-password", "1235");

        // Confirm Password
        await CommonUtils.fillAndTab(page, "#input-confirm", "1235");

        // Agree to Privacy Policy
        await page.locator("input[name='agree']").check();

        // Click Continue
        await page.locator("input[value='Continue']").click();

        await page.waitForTimeout(3000);

    } catch (error) {
        console.error("Test failed:", error);
    } finally {
        await browser.close();
    }

})();