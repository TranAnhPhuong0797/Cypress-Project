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

  it('should land on the dashboard and show the welcome banner', () => {
    // baseUrl + '/dashboard'
    cy.visit('')
    
  })

  it('should display the correct user name in the header', () => {
    cy.visit('')
    
  })

  it('should allow the user to log out and redirect to login page', () => {
    cy.visit('')
    
  })
})
