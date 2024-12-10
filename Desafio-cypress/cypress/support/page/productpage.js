import ProductPageLocators from '../locators/ProductPageLocators.js';

class ProductPage {
    addToCart() {
        cy.get(ProductPageLocators.addToCartButton).click();
    }
}

export default new ProductPage();
