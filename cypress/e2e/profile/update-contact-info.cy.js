describe('ParaBank - Update Contact Info', () => {
  beforeEach(() => {
    cy.env(['username', 'password']).then(({ username, password }) => {
      cy.loginWithSession(username, password)
    })

    cy.intercept('GET', '**/customers/*').as('getCustomer')

    cy.visit('/updateprofile.htm')

    cy.wait('@getCustomer')
      .its('response.statusCode')
      .should('eq', 200)
  })

  it('should update contact information and persist changes after reload', () => {
    const newCity = `Warsaw${Math.floor(Math.random() * 1000)}`

    cy.get('input[name="customer.address.city"]')
      .should('not.have.value', '')
      .clear()
      .type(newCity)

    cy.get('input[value="Update Profile"]').click()

    cy.contains('Profile Updated').should('be.visible')

    cy.contains(
      'Your updated address and phone number have been added to the system.'
    ).should('be.visible')

    cy.reload()

    cy.get('input[name="customer.address.city"]')
      .should('have.value', newCity)
  })
})