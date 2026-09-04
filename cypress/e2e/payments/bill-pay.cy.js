describe('ParaBank - Bill Pay', () => {
  beforeEach(() => {
      cy.env(['username', 'password']).then(({ username, password }) => {
        cy.loginWithSession(username, password)
      })
    cy.visit('/billpay.htm')
  })

  it('should successfully pay a bill using fixture data', () => {
    cy.fixture('payee').then((payee) => {
      cy.get('input[name="payee.name"]').type(payee.name)
      cy.get('input[name="payee.address.street"]').type(payee.street)
      cy.get('input[name="payee.address.city"]').type(payee.city)
      cy.get('input[name="payee.address.state"]').type(payee.state)
      cy.get('input[name="payee.address.zipCode"]').type(payee.zipCode)
      cy.get('input[name="payee.phoneNumber"]').type(payee.phone)

      cy.get('input[name="payee.accountNumber"]').type(payee.account)
      cy.get('input[name="verifyAccount"]').type(payee.account)
      cy.get('input[name="amount"]').type(payee.amount)

      cy.get('input[value="Send Payment"]').click()

      cy.contains('Bill Payment Complete').should('be.visible')
      cy.contains(payee.name).should('be.visible')
      cy.contains(`$${payee.amount}`).should('be.visible')
    })
  })
})