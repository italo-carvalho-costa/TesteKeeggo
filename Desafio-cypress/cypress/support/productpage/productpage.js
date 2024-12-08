
class ProductPage {
    addToCart() {
        cy.get('.fixedBtn > .roboto-medium').click(); 
    }
}

export default new ProductPage();
