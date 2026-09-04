describe('ParaBank - Accounts API Error', () => {
  beforeEach(() => {
      cy.env(['username', 'password']).then(({ username, password }) => {
        cy.loginWithSession(username, password)
      })
  })

  it('should handle accounts API failure', () => {
    cy.intercept('GET', '**/accounts*', {
      statusCode: 500,
      body: {
        error: 'Internal Server Error'
      }
    }).as('getAccountsError')

    cy.visit('/overview.htm')
    cy.wait('@getAccountsError').its('response.statusCode').should('eq', 500)
    cy.contains('Error!').should('be.visible')
    cy.contains('An internal error has occurred and has been logged.').should('be.visible')
  })
})