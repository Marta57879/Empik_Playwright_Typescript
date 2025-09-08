import { expect, Locator, Page, FrameLocator } from "@playwright/test";


export class CartPage {

    readonly page: Page;
    
    readonly searchBar: Locator;
    readonly cartItemCount: Locator;
    readonly glassIcon: Locator;
    readonly productElement: Locator;
    readonly addToCartButton: Locator;
    readonly closureButton: Locator;
    readonly indicator: Locator;
    readonly cart: Locator;
    readonly numberOfItemsInCart: Locator;
    readonly itemInSearchResults: Locator;
    readonly frame: FrameLocator;
    readonly productTitle: Locator;
    readonly moveToCartButton:Locator;
    readonly myCartButton:Locator;
    

    constructor(page: Page) {
        this.page = page;
        this.searchBar = page.locator('.css-1bv9hbm-normalize-root-k .css-1sobvo3');
        this.cartItemCount = page.locator('ul.empikNav__user .infoCircle');
        this.glassIcon = page.locator('.css-1m7bysf-root-l');
        this.productElement = page.locator(".product-details-wrapper  [data-product-id='p1475195941']");
        this.frame = page.frameLocator('.css-1dzcvhq-ButtonStyles-AddToCartButtonStyles-addToCartBtn-Button');
        this.closureButton = page.locator('.css-17zvhyy-DrawerDesktopStyles');
        this.indicator = page.locator('.css-1mfis47 .indicator');
        this.cart = page.locator('#simple-dropdown4');
        this.numberOfItemsInCart = page.locator('.css-1yxg6oi input[data-ta="quantity-number"]');
        this.itemInSearchResults = page.locator('.css-1f93xgv-container-1-layer');
        this.addToCartButton = page.locator('.css-tgz8pg-container button[data-ta="add-to-cart-btn"]');
        this.productTitle = page.locator('a.seoTitle[title*="Jesteś kozak! Uwierz w siebie i zacznij żyć pełnią życia - audiobook  - Sincero Jen"]');
        this.myCartButton = page.locator('.empik-list .ta-minicart .css-1s93l88');
        this.moveToCartButton = page.locator('button[data-ta="go-to-cart"]');
    }
    async openCart(): Promise<void> {
        await this.page.goto('/nowosci/ksiazki?sort=scoreDesc');
        await this.page.getByRole('button', { name: /Zaakceptuj zgody/i }).click();
    
    }


    async insertValueIntoSearchBar(value: string): Promise<void> {
        await this.searchBar.fill('Jesteś kozak uwierz w siebie');
        await this.page.waitForTimeout(4000);
        await expect(this.glassIcon).toBeEnabled();
        await this.glassIcon.click();
        

    }
    async selectProduct(): Promise<void> {

        await expect(this.productElement).toBeEnabled();
        await this.productElement.click();
        await this.page.waitForLoadState('networkidle');
        await this.page.waitForTimeout(4000);

    }
    async addProductToCart(): Promise<void> {

        await expect(this.addToCartButton).toBeEnabled();
        await this.addToCartButton.click();
        await this.page.waitForLoadState('networkidle');
        //await this.page.waitForTimeout(4000);
        await this.closureButton.click();
       
    }

    async moveToCart(): Promise<void> {

        await expect(this.myCartButton).toBeEnabled();
        await this.myCartButton.click();
        

    }

    async isIndicatorDisplayed(): Promise<void> {
        if (this.indicator) {
            await expect(this.indicator).toBeVisible();
        }
    }
    
        

}