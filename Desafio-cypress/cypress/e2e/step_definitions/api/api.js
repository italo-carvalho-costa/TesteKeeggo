import {Given, When, And, Then} from 'cypress-cucumber-preprocessor/steps'
import apiProcurarProduto from '../../../support/apiprocurarproduto/apiProcurarProduto'
import token from '../../../support/token/token'
import alterarimagemproduto from '../../../support/alterarimagemproduto/alterarimagemproduto'
import apiUpdateImagem from '../../../support/apiupdateimagem/apiUpdateImagem'

Given("que estou logado", () =>{
    token.getToken()
   
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


  When("faco a requisicao Post alteracao de imagem do produto TABLET", () => {
    const token = Cypress.env('token');  
    apiUpdateImagem.updateProductImage(516425495, token, 'image.jpg');

    });
Then("servico post retorna status 200", () =>{
    const status = Cypress.env('status');
    cy.log(status)
})


  