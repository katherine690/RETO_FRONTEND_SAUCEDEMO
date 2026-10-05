class CheckoutPage {
    constructor(page) {
        this.page = page;
        this.checkoutButton = page.locator('[data-test="checkout"]');
        this.firstNameInput = page.locator('[data-test="firstName"]');
        this.lastNameInput = page.locator('[data-test="lastName"]');
        this.postalCodeInput = page.locator('[data-test="postalCode"]');
        this.continueButton = page.locator('[data-test="continue"]');
        this.finishButton = page.locator('[data-test="finish"]');
        this.completeHeader = page.locator('.complete-header');
    }

    async completeInformation(first, last, zip) {
        await this.checkoutButton.click();
        await this.firstNameInput.fill(first);
        await this.lastNameInput.fill(last);
        await this.postalCodeInput.fill(zip);
        await this.continueButton.click();
    }

    async finishCheckout() {
        await this.finishButton.click();
    }
}
module.exports = { CheckoutPage };
