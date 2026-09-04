import RegistrationPage from '../../pages/RegistrationPage'
import { generateUser } from '../../utils/testData'

describe('ParaBank - Registration', () => {
  it('should register a new user with dynamically generated data', () => {
    const user = generateUser()

    cy.visit('/index.htm')
    cy.contains('Register').click()

    RegistrationPage.firstNameInput().type(user.firstName)
    RegistrationPage.lastNameInput().type(user.lastName)

    RegistrationPage.streetInput().type(user.address.street)
    RegistrationPage.cityInput().type(user.address.city)
    RegistrationPage.stateInput().type(user.address.state)
    RegistrationPage.zipCodeInput().type(user.address.zipCode)

    RegistrationPage.phoneInput().type(user.phoneNumber)
    RegistrationPage.ssnInput().type(user.ssn)

    RegistrationPage.usernameInput().type(user.username)
    RegistrationPage.passwordInput().type(user.password, { log: false })
    RegistrationPage.confirmPasswordInput().type(user.password, { log: false })

    RegistrationPage.registerButton().click()

    cy.contains(`Welcome ${user.username}`).should('be.visible')
    cy.contains(
      'Your account was created successfully. You are now logged in.').should('be.visible')

    cy.contains('Log Out').click()
    
    cy.login(user.username, user.password)
    cy.contains('Accounts Overview').should('be.visible')
    cy.contains('Log Out').should('be.visible')
  })

  it('should display validation error when passwords do not match', () => {
  const user = generateUser()

  cy.visit('/index.htm')
  cy.contains('Register').click()

  RegistrationPage.firstNameInput().type(user.firstName)
  RegistrationPage.lastNameInput().type(user.lastName)

  RegistrationPage.streetInput().type(user.address.street)
  RegistrationPage.cityInput().type(user.address.city)
  RegistrationPage.stateInput().type(user.address.state)
  RegistrationPage.zipCodeInput().type(user.address.zipCode)

  RegistrationPage.phoneInput().type(user.phoneNumber)
  RegistrationPage.ssnInput().type(user.ssn)

  RegistrationPage.usernameInput().type(user.username)
  RegistrationPage.passwordInput().type(user.password, { log: false })

  RegistrationPage.confirmPasswordInput()
    .type('DifferentPassword123!', { log: false })

  RegistrationPage.registerButton().click()

  cy.contains('Passwords did not match.').should('be.visible')
})
})