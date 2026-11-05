
import {test,expect} from "@playwright/test"
test("Assertions",async ({page}) => {
    
    await page.goto("https://demoapps.qspiders.com/ui?scenario=1")

    await expect(page).toHaveURL("https://demoapps.qspiders.com/ui?scenario=1")

    await expect(page).toHaveTitle("DemoApps | Qspiders | Text Box")

    //let logo=await page.locator(".header-logo")

    //await expect(logo).toBeVisible()







})