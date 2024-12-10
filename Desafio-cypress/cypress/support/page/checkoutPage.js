import CheckoutPageLocators from '../locators/CheckoutPageLocators.js';

class CheckoutPage {
    proceedToCheckout() {
        cy.get(CheckoutPageLocators.checkoutPopupButton).click(); 
    }

    screenshot() {
        cy.screenshot(); 
    }
}

export default new CheckoutPage();
