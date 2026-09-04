class RegistrationPages {
firstNameInput() {
    return cy.get('input[name="customer.firstName"]')
  }

  lastNameInput() {
    return cy.get('input[name="customer.lastName"]')
  }

  streetInput() {
    return cy.get('input[name="customer.address.street"]')
  }

  cityInput() {
    return cy.get('input[name="customer.address.city"]')
  }

  stateInput() {
    return cy.get('input[name="customer.address.state"]')
  }

  zipCodeInput() {
    return cy.get('input[name="customer.address.zipCode"]')
  }

  phoneInput() {
    return cy.get('input[name="customer.phoneNumber"]')
  }

  ssnInput() {
    return cy.get('input[name="customer.ssn"]')
  }

  usernameInput() {
    return cy.get('input[name="customer.username"]')
  }

  passwordInput() {
    return cy.get('input[name="customer.password"]')
  }

  confirmPasswordInput() {
    return cy.get('input[name="repeatedPassword"]')
  }

  registerButton() {
    return cy.get('input[value="Register"]')
  }
}

export default new RegistrationPages()