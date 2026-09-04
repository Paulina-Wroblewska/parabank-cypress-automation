describe('ParaBank - Transaction Details', () => {
  beforeEach(() => {
    cy.env(['username', 'password']).then(({ username, password }) => {
      cy.loginWithSession(username, password)
    })
  })

  it('should open transaction details from search results', () => {
    const amount = '10'

    cy.visit('/transfer.htm')

    cy.get('#fromAccountId')
      .find('option')
      .first()
      .invoke('val')
      .then((fromAccount) => {
        cy.get('#toAccountId')
          .find('option')
          .eq(1)
          .invoke('val')
          .then((toAccount) => {
            cy.get('#amount').type(amount)

            cy.get('#fromAccountId').select(fromAccount)
            cy.get('#toAccountId').select(toAccount)

            cy.get('input[value="Transfer"]').click()

            cy.contains('Transfer Complete!').should('be.visible')

            cy.visit('/findtrans.htm')

            cy.get('#accountId').select(fromAccount)
            cy.get('#amount').type(amount)
            cy.get('#findByAmount').click()

            cy.contains('Transaction Results').should('be.visible')

            cy.get('#transactionTable')
              .should('be.visible')

            cy.get('#transactionTable')
              .contains('$10.00')
              .first()
              .closest('tr')
              .within(() => {
                cy.get('a')
                  .should('be.visible')
                  .click()
              })

            cy.contains('Transaction Details')
              .should('be.visible')
          })
      })
  })
})