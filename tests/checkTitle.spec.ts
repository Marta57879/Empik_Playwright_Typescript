import { test } from '@playwright/test';
import { LoginPage } from '../src/ui/pages/login.page';



test('Should display correct page title', async ({ page }) => {

  const loginPage = new LoginPage(page);

  await loginPage.open();
  await test.expect(page).toHaveTitle("Empik.com | 10 000 000 produktów i pomysłów na prezent | Dostawa za 0 zł z Empik Premium");
  console.log('Page title verified succesfully: ', await page.title());

});


