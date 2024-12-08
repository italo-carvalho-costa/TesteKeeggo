
class HomePage {
    visit() {
        cy.visit("https://advantageonlineshopping.com/#/");
        
    }
    visitTablet() {
        cy.visit("https://advantageonlineshopping.com/#/product/16?viewAll=tablet");
        
    }

    clickOnCategory() {
        cy.get(':nth-child(4) > .img').click();
    }

    searchForProduct(product) {
        cy.get('#autoComplete').type(`${product}{enter}`); 
    }

    selectProductFromSearch() {
        cy.get('.autoCompleteCover > div > img').click(); 
    }
}

export default new HomePage();
