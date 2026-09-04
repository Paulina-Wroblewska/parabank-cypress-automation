describe('ParaBank - Find Transactions', () => {
  beforeEach(() => {
      cy.env(['username', 'password']).then(({ username, password }) => {
        cy.loginWithSession(username, password)
      })
  })

  it('should find transaction by amount', () => {
    const amount = '10'

    cy.visit('/transfer.htm')

    cy.get('#fromAccountId').find('option').first().invoke('val').then((accountId) => {

        cy.get('#toAccountId').find('option').eq(1).invoke('val').then((toAccountId) => {
            cy.get('#amount').type(amount)
            cy.get('#fromAccountId').select(accountId)
            cy.get('#toAccountId').select(toAccountId)
            cy.get('input[value="Transfer"]').click()
            cy.contains('Transfer Complete!').should('be.visible')
            cy.visit('/findtrans.htm')
            cy.get('#accountId').select(accountId)
            cy.get('#amount').type(amount)
            cy.get('#findByAmount').click()
            cy.contains('Transaction Results').should('be.visible')
            cy.get('#transactionTable').should('be.visible').within(() => {
                cy.contains('$10.00').should('exist')
              })
          })
      })
  })
})