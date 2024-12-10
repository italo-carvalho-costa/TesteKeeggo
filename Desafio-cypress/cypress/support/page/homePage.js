import HomePageLocators from "../locators/HomePageLocators.js";

class HomePage {
    visit() {
        cy.visit("https://advantageonlineshopping.com/#/");
        
    }
    visitTablet() {
        cy.visit("https://advantageonlineshopping.com/#/product/16?viewAll=tablet");
        
    }

    clickOnCategory() {
        cy.get(HomePageLocators.categoryImage).click();
    }

    searchForProduct(product) {
        cy.get(HomePageLocators.autoCompleteInput).type(`${product}{enter}`); 
    }

    selectProductFromSearch() {
        cy.get(HomePageLocators.searchButton).click(); 
    }
}

export default new HomePage();
