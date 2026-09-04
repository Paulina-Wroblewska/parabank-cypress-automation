describe('ParaBank - Transfer Funds', () => {
  beforeEach(() => {
      cy.env(['username', 'password']).then(({ username, password }) => {
        cy.loginWithSession(username, password)
      })
    cy.visit('/transfer.htm')
  })

  it('should transfer funds between accounts and verify transaction via API', () => {
    const amount = '10'

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

            // UI validation
            cy.contains('Transfer Complete!').should('be.visible')

            cy.get('#amountResult').should('contain.text', amount)

            cy.get('#fromAccountIdResult').should('have.text', fromAccount)

            cy.get('#toAccountIdResult').should('have.text', toAccount)

            // API validation
            cy.request({
              method: 'GET',
              url: `/services/bank/accounts/${fromAccount}/transactions`,
              headers: {
                Accept: 'application/json'
              }
            }).then((response) => {
              expect(response.status).to.eq(200)
              expect(response.body).to.be.an('array')

              const transaction = response.body.find((transaction) =>
                Number(transaction.amount) === Number(amount))
              expect(transaction).to.exist
            })
          })
      })
  })
})