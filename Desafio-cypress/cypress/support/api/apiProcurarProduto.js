

class ProductSearchPage {
    searchProduct(productName) {
        const token = Cypress.env('token'); 
        cy.request({
            method: 'GET',
            url: 'https://www.advantageonlineshopping.com/catalog/api/v1/products/search',
            qs: {
                name: productName,
                quantityPerEachCategory: -1
            },
            headers: {
                Authorization: `Bearer ${token}`
            },
            failOnStatusCode: false
        }).then((response) => {
            if(response.status === 200) {
            expect(response.status).to.eq(200); 
            } else {
                cy.log('inconsistencia na api')
            }

            Cypress.env('response', response.body);
            Cypress.env('status', response.status); 
        });
    }

    logSearchResults() {
        const response = Cypress.env('response');
        cy.log(response);
        const product = response[0].products[0];
        cy.log(`Produto encontrado: ${product.productName}`);
        cy.log(`Preço: $${product.price}`);
        cy.log(`Imagem: ${product.imageUrl}`);
    }
}

export default new ProductSearchPage();
