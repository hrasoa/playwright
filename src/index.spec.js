const { test, expect } = require('@playwright/test');

test('Basic test', async ({ context, page, baseURL }) => {
  const home = await context.newPage();
  const blog = await context.newPage();

  const testHome = async () => {
    await home.goto(baseURL + '/');
    const title = home.locator('h1');
    await expect(title).toHaveText('Hello, World!');
  }

  const testBlog = async () => {
    await blog.goto(baseURL + '/blog');
    const title = blog.locator('h1');
    await expect(title).toHaveText('Blog');
    const text = blog.locator('#text');
    await expect(text).toHaveText('My YC app: Dropbox - Throw away your USB drive');
  }

  await Promise.all([testHome(), testBlog()]);
});
