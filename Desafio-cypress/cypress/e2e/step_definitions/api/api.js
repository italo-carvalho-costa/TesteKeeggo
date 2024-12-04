import {Given, When, And, Then} from 'cypress-cucumber-preprocessor/steps'

Given("que estou logado", () =>{
    cy.getToken()
   
})
When("faco a requisicao get de busca do produto TABLET", () =>{
    const token = Cypress.env('token')
    cy.request({
        method: 'GET',
        url: 'https://www.advantageonlineshopping.com/catalog/api/v1/products/search',
        qs: {
          name: 'HP ElitePad 1000 G2 Tablet',
          quantityPerEachCategory: -1
        },
        headers: {
          Authorization: `Bearer ${token}` 
        }
      }).then((response) => {
        expect(response.status).to.eq(200); 
      const status = response.status
      const resp = response.body
      Cypress.env('response', resp);
      Cypress.env('status', status);
    }); 

})
Then("servico retorna status 200", () =>{
    const status = Cypress.env('status');
    cy.log(status)
})

And("resultado da busca", () => {
    const response = Cypress.env('response');  
    cy.log(response); 
    const product = response[0].products[0];
    cy.log(`Produto encontrado: ${product.productName}`);
    cy.log(`Preço: $${product.price}`);
    cy.log(`Imagem: ${product.imageUrl}`);
  });


  When("faco a requisicao Post alteracao de imagem do produto TABLET", () => {
    const token = Cypress.env('token');
    cy.log(token); 
  
    cy.fixture('image.jpg', 'binary').then(image => {
      const blob = Cypress.Blob.binaryStringToBlob(image, 'image/jpg')
      const formData = new FormData();
      formData.append('image', blob, 'image.jpg');
       cy.request({
        method: 'POST',
        url: 'https://www.advantageonlineshopping.com/catalog/api/v1/product/image/516425495/3100?product_id=16',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data' 
        },
        body: formData
      }).then((response) => {
        expect(response.status).to.eq(200); 
        cy.log(response.body); 
      });
    });
Then("servico post retorna status 200", () =>{
    const status = Cypress.env('status');
    cy.log(status)
})

And("resultado da mudanca da imagem", () => {
})


  })