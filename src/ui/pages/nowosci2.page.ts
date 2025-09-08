import { expect, Locator, Page } from '@playwright/test';


export class Nowosci2Page {
    readonly page: Page;
    readonly sortDropdown: Locator;
    readonly firstPriceElement: Locator;
    readonly firstPriceHighElement: Locator;

    constructor(page: Page) {
        this.page = page;
        this.sortDropdown = page.locator('#search-sort-select');
        this.firstPriceElement = page.locator('.ta-price-tile[itemprop="price"]');
        this.firstPriceHighElement = page.locator('.ta-price-tile[itemprop="price"]');

    }
    async openNowosci(): Promise<void> {
        await this.page.goto('/nowosci/ksiazki');
        await this.page.getByRole('button', { name: /Zaakceptuj zgody/i }).click(); 
    }

    async clickOnDropdown(): Promise<void> {

        await this.sortDropdown.waitFor({ state: 'visible', timeout: 10000 });
        await this.sortDropdown.selectOption('priceAsc'); 

    }

    async getLowestPrice(): Promise<number> {

        const firstPriceElement = this.page.locator('.ta-price-tile[itemprop="price"]').first();
        const firstPriceText = await firstPriceElement.textContent();

        if (!firstPriceText) return 0;

        const cleanedText = firstPriceText.replace(/[^\d,.]+/g, '').replace(',', '.');
        return parseFloat(cleanedText);

    }

    async changeSortingToDesc(): Promise<void> {

        await this.sortDropdown.selectOption('priceDesc');
        await this.page.waitForSelector('.ta-price-tile[itemprop="price"]', 
            { state: 'visible', timeout: 10000 });
    }

    async getTheHIghestPrice(): Promise<number> {
        const firstPriceHighElement = this.page.locator('.ta-price-tile[itemprop="price"]').first();
        const firstPriceHighText = await firstPriceHighElement.textContent();

        if (!firstPriceHighText) return 0;

        const cleanedText = firstPriceHighText.replace(/[^\d,.]+/g, '').replace(',', '.');
        return parseFloat(cleanedText);
    }
  


}