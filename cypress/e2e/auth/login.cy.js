import LoginPages from '../../pages/LoginPages'

describe('ParaBank - Login', () => {

  const invalidLoginCases = [
    {
      name: 'invalid username',
      username: 'invalidUser',
      password: 'demo'
    },
    {
      name: 'invalid password',
      username: 'john',
      password: 'wrongPassword'
    },
    {
      name: 'invalid username and password',
      username: 'invalidUser',
      password: 'wrongPassword'
    }
  ]

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

  invalidLoginCases.forEach(({ name, username, password }) => {
    it(`Should display an error for ${name}`, () => {
      LoginPages.usernameInput().type(username)
      LoginPages.passwordInput().type(password)
      LoginPages.loginButton().click()

      cy.contains('Error!').should('be.visible')
      cy.contains(
        'The username and password could not be verified.'
      ).should('be.visible')
    })
  })
})