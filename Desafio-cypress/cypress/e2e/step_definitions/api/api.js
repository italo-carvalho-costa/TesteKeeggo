import {Given, When, And, Then} from 'cypress-cucumber-preprocessor/steps'
import apiProcurarProduto from '../../../support/api/apiProcurarProduto.js'
import token from '../../../support/token/token'
import apiUpdateImagem from '../../../support/api/apiUpdateImagem.js'
import HomePageLocators from '../../../support/locators/HomePageLocators.js'

Given("que eu tenho uma url valida", () =>{
    cy.log(HomePageLocators.urlProcuraProduto)
   
})
When("faco a requisicao get de busca do produto TABLET", () =>{
    apiProcurarProduto.searchProduct('HP ElitePad 1000 G2 Tablet')

})
Then("servico retorna status 200", () =>{
    const status = Cypress.env('status');
   
})

And("resultado da busca", () => {
    apiProcurarProduto.logSearchResults()
  });


Given("que estou logado", () =>{
    token.getToken() 
   
})
  When("faco a requisicao Post alteracao de imagem do produto TABLET", () => {
    const token = Cypress.env('token');  
    apiUpdateImagem.updateProductImage(516425495, token, 'image.jpg');
    apiUpdateImagem

});
Then("servico post retorna status 200", () =>{
    const status = Cypress.env('status');
    cy.log(status)
})


  