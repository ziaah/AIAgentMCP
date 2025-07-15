// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('Sauce Demo E2E Tests', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the website
    await page.goto('https://www.saucedemo.com/');
  });

  test('should complete purchase flow successfully', async ({ page }) => {
    // Login
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');

    // Verify successful login
    await expect(page.locator('.title')).toHaveText('Products');

    // Select a product (first product)
    const firstProduct = page.locator('.inventory_item').first();
    const productName = await firstProduct.locator('.inventory_item_name').textContent();
    const productPrice = await firstProduct.locator('.inventory_item_price').textContent();
    await firstProduct.locator('button').click();

    // Go to cart
    await page.click('.shopping_cart_link');

    // Verify cart contents
    await expect(page.locator('.inventory_item_name')).toHaveText(productName);
    await expect(page.locator('.inventory_item_price')).toHaveText(productPrice);

    // Proceed to checkout
    await page.click('#checkout');

    // Fill checkout information
    await page.fill('#first-name', 'John');
    await page.fill('#last-name', 'Doe');
    await page.fill('#postal-code', '12345');
    await page.click('#continue');

    // Verify checkout overview
    await expect(page.locator('.inventory_item_name')).toHaveText(productName);
    await expect(page.locator('.inventory_item_price')).toHaveText(productPrice);

    // Complete purchase
    await page.click('#finish');

    // Verify successful purchase
    await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!');
  });
});
