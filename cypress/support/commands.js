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
import LoginPages from "../pages/LoginPages"

Cypress.Commands.add('login', (username = 'john', password = 'demo') => {
    LoginPages.visit()
    LoginPages.usernameInput().clear().type(username)
    LoginPages.passwordInput().clear().type(password, {log:false})
    LoginPages.loginButton().click()
    cy.contains('Accounts Overview').should('be.visible')
})

Cypress.Commands.add('loginWithSession', (username, password) => {
  cy.session([username, password], () => {
    cy.login(username, password)

    cy.contains('Accounts Overview').should('be.visible')
  })
})