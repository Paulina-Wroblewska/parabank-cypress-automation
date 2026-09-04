describe('ParaBank - Request Loan', () => {
  beforeEach(() => {
    cy.env(['username', 'password']).then(({ username, password }) => {
      cy.loginWithSession(username, password)
    })

    cy.visit('/requestloan.htm')
  })

  it('should process a loan request', () => {
    const loanAmount = '100'
    const downPayment = '20'

    cy.get('#amount').type(loanAmount)
    cy.get('#downPayment').type(downPayment)

    cy.get('#fromAccountId')
      .find('option')
      .first()
      .invoke('val')
      .then((accountId) => {
        cy.get('#fromAccountId').select(accountId)

        cy.get('input[value="Apply Now"]').click()

        cy.contains('Loan Request Processed').should('be.visible')
        cy.get('#loanStatus').should('be.visible').invoke('text').should('match', /^(Approved|Denied)$/)
      })
  })
})