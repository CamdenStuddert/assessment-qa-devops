const { Builder, Browser, By, until } = require("selenium-webdriver");

let driver;

beforeEach(async () => {
  driver = await new Builder().forBrowser(Browser.CHROME).build();
});

afterEach(async () => {
  await driver.quit();
});

describe("Duel Duo tests", () => {
  test("page loads with title", async () => {
    await driver.get("http://localhost:4000");
    await driver.wait(until.titleIs("Duel Duo"), 1000);
  });

  test("Draw button displays choices", async () => {
    await driver.get("http://localhost:4000");
    await driver.wait(until.titleIs("Duel Duo"), 1000)
    await driver.sleep(1000)
    await driver.findElement(By.id(`draw`)).click()
    await driver.wait(until.elementLocated(By.id('choices')), 1000)
    expect(await driver.findElement(By.id('choices')).isDisplayed()).toBe(true)
  })

  test("", async () => {
    await driver.get("http://localhost:4000");
    await driver.wait(until.titleIs("Duel Duo"), 1000)
    await driver.sleep(1000)
    await driver.findElement(By.id(`draw`)).click()
    await driver.wait(until.elementLocated(By.id('choices')), 1000)
    await driver.findElement(By.className(`bot-btn`)).click()
    await driver.wait(until.elementLocated(By.id(`your-duo-header`)), 1000)
    expect(await driver.findElement(By.id('your-duo-header')).isDisplayed()).toBe(true)
  })
});