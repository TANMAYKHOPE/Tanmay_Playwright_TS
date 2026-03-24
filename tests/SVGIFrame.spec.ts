
import { Browser, FrameLocator, Locator, Page, chromium } from "@playwright/test";
(async () => {
    let browsser:Browser=await chromium.launch({

    headless:false,
    channel:'chrome',
});

let page:Page=await browsser.newPage(); 

await page.goto(`https://petdiseasealerts.org/forecast-map/#/`, {waitUntil:'load'});
await page.waitForTimeout(3000);
let FrameEle:FrameLocator = page.frameLocator(`iframe[id*='map-instance']`);
//frame locator can not used for  Xpath , it can only be used for  css selector

let Allstate:Locator[] = await FrameEle.locator(`//*[local-name()='svg']//*[name()='g' and @id='regions']/*[name()='g']`).all();


console.log('total number of states: ' + Allstate.length);

for(let e of Allstate){


let box=await e.boundingBox();
if(box){

    await page.mouse.move(box.x+box.width/2, box.y+box.height/2);
    await page.waitForTimeout(500);
}

   //ait e.hover();
  //wait page.waitForTimeout(3000);
   let  statename= await e.getAttribute('id');
   console.log(statename);

}




})();