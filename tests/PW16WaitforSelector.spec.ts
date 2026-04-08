import { Browser, chromium, expect, Locator, Page } from "@playwright/test";
import { time } from "node:console";
(async () => {

    let browser: Browser = await chromium.launch(
        { headless: false, channel: 'chrome' }
    );

    let page: Page = await browser.newPage();
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');

    //wait for  selector--only used for  Xpath and CSS Selecoter--not for  getby methods

    (await page.waitForSelector('#input-firstname')).fill('sachin');

    //waitFor() --> locator -- any kind of locators - pw=semantic roles
    //waitForSelector() --> page --only for xpath/css

      //its only for the page loading concept:
    page.waitForLoadState("load"); //page is fully loaded
    page.waitForLoadState("domcontentloaded") ////DOM is fully loaded
    page.waitForLoadState("networkidle"); //network api are done

    //dialog, popup
     //page.waitForEvent()
    
    //wait for url:
   //page.waitForURL('url value');

   //assingment at 1.01 HR





    })();