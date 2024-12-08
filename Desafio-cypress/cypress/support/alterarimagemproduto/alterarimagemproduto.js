

const updateProductImage = (productId, token, imagePath) => {
    cy.fixture(imagePath, 'binary').then((image) => {
      const blob = Cypress.Blob.binaryStringToBlob(image, 'image/jpg');
      const formData = new FormData();
      formData.append('image', blob, imagePath);
  
      cy.request({
        method: 'POST',
        url: `https://www.advantageonlineshopping.com/catalog/api/v1/product/image/${productId}/3100?product_id=16`,
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
        body: formData,
      }).then((response) => {
        Cypress.env('status', response.status);
        Cypress.env('imageUpdateResponse', response.body);
      });
    });
  };
  
  export default {
    updateProductImage,
  };
  