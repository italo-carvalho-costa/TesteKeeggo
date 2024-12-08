

class SearchPage {
    verifySearchResults() {
        cy.get('#searchResultLabel').should('contain', 'Search result'); 
    }

    takeScreenshot() {
        cy.get('#searchPage').screenshot(); 
    }
}

export default new SearchPage();
