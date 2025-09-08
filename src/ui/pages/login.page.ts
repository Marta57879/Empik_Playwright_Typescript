import { expect, Page } from "@playwright/test";

export class LoginPage {

    private BASE_URL = 'https://www.empik.com';
    private title: string = "Empik.com | 10 000 000 produktów i pomysłów na prezent | Dostawa za 0 zł z Empik Premium";
    
    constructor(private page: Page) {}

    async open(): Promise<void> {
        await this.page.goto(this.BASE_URL);
        await this.page.getByRole('button', { name: /Zaakceptuj zgody/i }).click();
        await expect(this.page).toHaveTitle(this.title);
    }

}