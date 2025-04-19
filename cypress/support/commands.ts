/// <reference types="cypress" />

import 'cypress-xpath'
import { getUser, UserRole } from './factories/userFactory'

declare global {
  namespace Cypress {
    interface Chainable<Subject = any> {
      /**
       * Log in as a given role (admin | normal | vendor).
       * Defaults to `Cypress.env('user')`.
       */
      login(role?: UserRole): Chainable<void>
    }
  }
}

Cypress.Commands.add('login', (role: UserRole = Cypress.env('user') as UserRole) => {
  getUser(role).login()
})
