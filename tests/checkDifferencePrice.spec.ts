import { test, expect} from '@playwright/test';
import { Nowosci2Page } from '../src/ui/pages/nowosci2.page';

  test('Check the difference between the highest and lowest book price', async ({ page }) => {

    
    const nowosci2Page = new Nowosci2Page(page);

      await nowosci2Page.openNowosci();
      await nowosci2Page.clickOnDropdown();
      
      const lowestPrice = await nowosci2Page.getLowestPrice();

      await nowosci2Page.changeSortingToDesc();
      const highestPrice = await nowosci2Page.getTheHIghestPrice();

      const priceDifference = highestPrice - lowestPrice;


      expect(priceDifference).toBeGreaterThan(0);
      expect(lowestPrice).toBeGreaterThan(0);
      expect(highestPrice).toBeGreaterThan(0);
      console.log('Price difference: ', priceDifference);
      

});