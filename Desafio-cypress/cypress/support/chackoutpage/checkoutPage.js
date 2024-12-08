
class CheckoutPage {
    proceedToCheckout() {
        cy.get('#checkOutPopUp').click(); 
    }

    screenshot() {
        cy.screenshot(); 
    }
}

export default new CheckoutPage();
