import {Given, When, And, Then} from 'cypress-cucumber-preprocessor/steps'

Given("Que eu estou no site", () =>{
    cy.visit("https://advantageonlineshopping.com/#/")
})
When("Realizo a busca do produto TABLET no site", () =>{
    cy.get(':nth-child(4) > .img').click()
    cy.get('#autoComplete').type('tablet{enter}')
    cy.get('.autoCompleteCover > div > img').click()

})
Then("O site retorna em tela todos os modelos disponíveis", () =>{
    cy.get('#searchResultLabel').should('contain', 'Search result')
    cy.get('#searchPage').screenshot()
})

Given("Que eu estou no site na página do produto HP ELITEPAD 1000 G2 TABLET", () =>{
    cy.visit("https://advantageonlineshopping.com/#/product/16?viewAll=tablet")
})
When("clico no botão ADD TO CART", () =>{
    cy.get('.fixedBtn > .roboto-medium').click()
})

And("clico no botão CHECKOUT", () =>{
    cy.get('#checkOutPopUp').click()
})
Then("o site redireciona para a página de pagamento", () =>{
   cy.screenshot()
})
