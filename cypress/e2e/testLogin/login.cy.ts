// cypress/e2e/sample.spec.js

describe('E2E: Test Suilt - Login test cases', () => {
  before(() => {
    // uses cypress.config.js baseUrl + our login command:
    Cypress.login(); // will default to Cypress.env('user')
  });

  it('lands on the dashboard', () => {
    cy.visit('/dashboard');
    cy.contains('Welcome').should('be.visible');
  });
});
