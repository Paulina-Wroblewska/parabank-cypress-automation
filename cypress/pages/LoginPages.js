class LoginPages {
    usernameInput() {
        return cy.get('input[name="username"]')
    }

    passwordInput() {
        return cy.get('input[name="password"]')
    }

    loginButton() {
        return cy.get('input[type="submit"]')
    }

    visit() {
        cy.visit('/index.htm')
    }

    errorMessage() {
        return cy.get('.error')
    }
}

export default new LoginPages()