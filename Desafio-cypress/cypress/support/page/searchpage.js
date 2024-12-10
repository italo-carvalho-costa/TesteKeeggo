import SearchPageLocators from '../locators/SearchPageLocators.js';

class SearchPage {
    verifySearchResults() {
        cy.get(SearchPageLocators.searchResultLabel).should('contain', 'Search result');
    }
}

export default new SearchPage();
