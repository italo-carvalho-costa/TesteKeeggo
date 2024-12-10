// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('getToken', () => {
    cy.request({
      failOnStatusCode: false,
      method: 'POST',
      url: 'https://www.advantageonlineshopping.com/accountservice/accountrest/api/v1/login',
      headers: {
        'Content-Type': 'application/json'
      },
      body: {
        email: 'italocarvalho.costa1994@gmail.com',
        loginPassword: 'Tinho1809',
        loginUser: 'ItaloCarvalho',
      },
      
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.statusMessage.success).to.be.true;
   
      const token = response.body.statusMessage.token;
      Cypress.env('token', token);
    });
  });

