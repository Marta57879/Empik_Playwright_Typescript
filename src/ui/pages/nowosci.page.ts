import { expect, Locator, Page } from "@playwright/test";


export class NowosciPage {
    readonly page: Page;
    readonly ksiazkiKategoria: Locator;
    readonly nowosci: Locator;

    constructor(page: Page) {
        this.page = page;
        this.ksiazkiKategoria = page.locator('main li[data-name="Książki"]');
        this.nowosci = page.locator('main ul.nav-subcategories__list a[title="Nowości"]');
    }

    async navigateToNowosci(): Promise<void> {

        await this.ksiazkiKategoria.hover();
        await this.page.waitForTimeout(500);
        await this.nowosci.click({ timeout: 30000 });
        await this.page.waitForLoadState('networkidle');
        

    
    }


}