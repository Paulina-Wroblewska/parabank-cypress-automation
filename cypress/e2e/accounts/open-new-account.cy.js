describe('ParaBank - Open New Account', () => {
  beforeEach(() => {
    cy.env(['username', 'password']).then(({ username, password }) => {
        cy.loginWithSession(username, password)
    })
    cy.visit('/openaccount.htm')
  })

  it('should open a new savings account and display its details', () => {
    cy.get('#type').select('SAVINGS')

    cy.get('#fromAccountId')
      .find('option')
      .first()
      .invoke('val')
      .then((sourceAccount) => {
        cy.get('#fromAccountId').select(sourceAccount)

        cy.get('input[value="Open New Account"]').click()

        cy.contains('Account Opened!').should('be.visible')

        cy.get('#newAccountId')
          .should('be.visible')
          .and('not.be.empty')
          .invoke('text')
          .then((newAccountId) => {
            cy.get('#newAccountId').click()

            cy.contains('Account Details').should('be.visible')

            cy.get('#accountId')
              .should('have.text', newAccountId.trim())

            cy.get('#accountType')
              .should('have.text', 'SAVINGS')
          })
      })
  })
})