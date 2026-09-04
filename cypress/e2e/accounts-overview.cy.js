describe('ParaBank - Accounts Overview', () => {
  beforeEach(() => {
      cy.env(['username', 'password']).then(({ username, password }) => {
        cy.loginWithSession(username, password)
      })
  })

  it('should display accounts overview and load account data', () => {
    cy.intercept('GET', '**/accounts*').as('getAccounts')

    cy.visit('/overview.htm')

    cy.contains('Accounts Overview').should('be.visible')
    cy.get('#accountTable').should('be.visible')

    cy.wait('@getAccounts')
      .its('response.statusCode')
      .should('eq', 200)
  })
})