import LoginPages from '../../pages/LoginPages'

describe('ParaBank - Login', () => {

  beforeEach('Visit main page', () => {
    cy.visit('/index.htm')
  })

  it('Should log in with valid credentials', () => {
    LoginPages.usernameInput().type('john')
    LoginPages.passwordInput().type('demo')
    LoginPages.loginButton().click()

    cy.contains('Accounts Overview').should('be.visible')
    cy.contains('Log Out').should('be.visible')
  })

  it('Shoud display an error for valid credentials', () => {
    LoginPages.usernameInput().type('invalidUser')
    LoginPages.passwordInput().type('wrongPassword')
    LoginPages.loginButton().click()

    cy.contains('Error!').should('be.visible')
    cy.contains('The username and password could not be verified.').should('be.visible')
  })
})