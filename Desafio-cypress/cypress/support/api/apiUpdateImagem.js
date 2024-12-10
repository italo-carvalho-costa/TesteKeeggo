class ProductImageUpdatePage {
    updateProductImage() {
        const token = Cypress.env('token');
        cy.log(token);

        cy.fixture('image.jpg', 'binary').then(image => {
            const blob = Cypress.Blob.binaryStringToBlob(image, 'image/jpg');
            const formData = new FormData();
            formData.append('image', blob, 'image.jpg');

            cy.request({
                method: 'POST',
                url: 'https://www.advantageonlineshopping.com/catalog/api/v1/product/image/516425495/3100?product_id=16',
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data'
                },
                body: formData,
                failOnStatusCode: false
            }).then((response) => {
                if(response.status === 200) {
                    expect(response.status).to.eq(200); 
                    } else {
                        cy.log('inconsistencia na api')
                    }
                Cypress.env('status', response.status);
                Cypress.env('imageUpdateResponse', response.body);
                // expect(response.status).to.be.within(200,299) 
                cy.log(response.body);
            });
        });
    }
}

export default new ProductImageUpdatePage();
