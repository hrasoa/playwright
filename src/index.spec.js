const { test, expect } = require('@playwright/test');

test('Basic test', async ({ page, baseURL }) => {
  await page.goto(baseURL + '/');
  const title = page.locator('h1');
  await expect(title).toHaveText('Hello, World!');
});