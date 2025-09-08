import { test, expect } from '@playwright/test';
import { CartPage } from '../src/ui/pages/cart.page';


test('Check if indicator ios visible', async ({ page }) => {
  const cartPage = new CartPage(page);

  await cartPage.openCart();
  await cartPage.insertValueIntoSearchBar('Jesteś kozak uwierz w siebie');
  await cartPage.selectProduct();
  await cartPage.addProductToCart();
  await cartPage.isIndicatorDisplayed();

  await expect(cartPage.indicator).toBeVisible();
  console.log('Indicator is displayed.');
  

});


test('Check if product is in Cart', async ({ page }) => {
  const cartPage = new CartPage(page);

  await cartPage.openCart();
  await cartPage.insertValueIntoSearchBar('Jesteś kozak uwierz w siebie');
  await cartPage.selectProduct();
  await cartPage.addProductToCart();
  await cartPage.isIndicatorDisplayed();
  await cartPage.moveToCart();
  const expectedQuantity = '1';
  await expect(cartPage.numberOfItemsInCart).toHaveValue(expectedQuantity);

  console.log('Amount of items in the cart is: ', await cartPage.numberOfItemsInCart.inputValue());
  

});


 