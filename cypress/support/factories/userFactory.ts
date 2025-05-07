export type UserRole = 'admin' | 'normal' | 'vendor'

abstract class BaseUser {
  constructor(protected username: string, protected password: string) {}
  abstract login(): void
}

export class AdminUser extends BaseUser {
  constructor() { super('Admin', 'admin123') }
  login() {
    cy.visit('')
    cy.xpath("//input[@name='username']").type(this.username)
    cy.xpath("//input[@name='password']").type(this.password)
    cy.xpath("//button[@type='submit']").click()
  }
}

export class NormalUser extends BaseUser {
  constructor() { super('user@example.com', 'UserP@ss!') }
  login() {
    cy.visit('')
    cy.xpath("//input[@id='username']").type(this.username)
    cy.xpath("//input[@id='password']").type(this.password)
    cy.xpath("//button[@type='submit']").click()
  }
}

export class VendorUser extends BaseUser {
  constructor() { super('vendor@example.com', 'VendorP@ss!') }
  login() {
    cy.visit('')
    cy.xpath("//input[@id='username']").type(this.username)
    cy.xpath("//input[@id='password']").type(this.password)
    cy.xpath("//button[@type='submit']").click()
  }
}

export function getUser(role: string): BaseUser {
  switch (role.toLowerCase()) {
    case 'admin':    return new AdminUser()
    case 'normal':   return new NormalUser()
    case 'vendor':   return new VendorUser()
    default:
      throw new Error(`Unknown user role: ${role}`)
  }
}
