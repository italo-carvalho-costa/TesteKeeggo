

class SearchPage {
    verifySearchResults() {
        cy.get('#searchResultLabel').should('contain', 'Search result'); 
    }

}

export default new SearchPage();
