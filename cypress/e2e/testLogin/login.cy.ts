/// <reference types="cypress" />


describe('E2E Test Suite – Login Scenarios', () => {
  const envName = Cypress.env('dev')
  const userRole = Cypress.env('admin')

  before(() => {
    // Log which environment and user we’re testing against
    cy.log(`🌐 Environment: ${envName}`)
    cy.log(`👤 Logging in as: ${userRole}`)
  })

  beforeEach(() => {
    // Use our custom command (defaults to Cypress.env('user'))
    cy.login()
  })

  it('TC1: Should land on the dashboard and show the welcome banner', () => {
    // baseUrl + '/dashboard'
    const baseUrl = Cypress.config('baseUrl')
    cy.visit(`${baseUrl}/web/index.php/dashboard/index`)
  })
})
