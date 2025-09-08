import { test, expect} from '@playwright/test';
import { LoginPage } from '../src/ui/pages/login.page';
import { NowosciPage } from '../src/ui/pages/nowosci.page';


test('Navigate to "Nowości"', async ({ page }) => {

  const loginPage = new LoginPage(page);
    await loginPage.open();

  const nowosciPage = new NowosciPage(page);
    await nowosciPage.navigateToNowosci();
    await expect(page).toHaveURL(/nowosci\/ksiazki/);

    console.log('Navigation to "Nowości" page seccessfully completed.');


  });