class ProductsPage {
    constructor(page) {
        this.page = page;
        this.inventoryList = page.locator('.inventory_list');
        this.firstProductAddButton = page.locator('.btn_inventory').first();
        this.shoppingCartBadge = page.locator('.shopping_cart_badge');
        this.shoppingCartLink = page.locator('.shopping_cart_link');
    }

    async addFirstProduct() {
        await this.firstProductAddButton.click();
    }

    async goToCart() {
        await this.shoppingCartLink.click();
    }
}
module.exports = { ProductsPage };
