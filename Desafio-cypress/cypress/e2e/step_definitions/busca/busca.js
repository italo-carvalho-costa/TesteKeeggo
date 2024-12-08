import {Given, When, And, Then} from 'cypress-cucumber-preprocessor/steps'

import homePage from '../../../support/page/homePage.js';
import searchpage from '../../../support/searchpage/searchpage.js';
import productpage from '../../../support/productpage/productpage.js';
import checkoutPage from '../../../support/chackoutpage/checkoutPage.js';



Given("Que eu estou no site", () =>{
    homePage.visit()
})
When("Realizo a busca do produto TABLET no site", () =>{
    homePage.clickOnCategory()
    homePage.searchForProduct('Tablet')
    homePage.selectProductFromSearch()

})
Then("O site retorna em tela todos os modelos disponíveis", () =>{
    searchpage.verifySearchResults()
    searchpage.takeScreenshot()

})

Given("Que eu estou no site na página do produto HP ELITEPAD 1000 G2 TABLET", () =>{
    homePage.visitTablet()

})
When("clico no botão ADD TO CART", () =>{
    productpage.addToCart()

})

And("clico no botão CHECKOUT", () =>{
    checkoutPage.proceedToCheckout()

})
Then("o site redireciona para a página de pagamento", () =>{
    checkoutPage.screenshot()
  
})
