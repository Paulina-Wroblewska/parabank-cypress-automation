describe('ParaBank - Smoke', () => {
  it('should load the homepage successfully', () => {
    cy.visit('/index.htm')

    cy.title().should('include', 'ParaBank')
    cy.url().should('include', '/parabank/')
    cy.contains('Customer Login').should('be.visible')
  })
})