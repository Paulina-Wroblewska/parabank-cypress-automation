# ParaBank Cypress Test Automation

[![Cypress Tests](https://github.com/Paulina-Wroblewska/parabank-cypress-automation/actions/workflows/cypress-tests.yml/badge.svg)](https://github.com/Paulina-Wroblewska/parabank-cypress-automation/actions/workflows/cypress-tests.yml)

Automated end-to-end test project for the ParaBank demo banking application, built with Cypress and JavaScript.

The project focuses on maintainable test design, reusable components, test isolation, dynamic test data, API validation, network stubbing, and CI execution.

## Tech Stack

- Cypress 16
- JavaScript
- Node.js
- Page Object Model
- Custom Cypress Commands
- Fixtures
- REST API validation
- GitHub Actions

## Covered Scenarios

- Smoke test for application availability
- Login with valid credentials
- Data-driven negative login scenarios:
  - invalid username
  - invalid password
  - invalid username and password
- User registration with dynamically generated data
- Registration validation for mismatched passwords
- Logout and re-login using newly created credentials
- Accounts overview
- Open a new savings account and verify generated account details
- Transfer funds between accounts
- Validate a UI transfer through the REST API
- Bill payment using fixture data
- Find transactions by amount
- Open transaction details from search results
- Update contact information and verify persistence after reload
- Request a loan and validate the returned business status
- Handle a stubbed HTTP 500 response from the accounts API

## Test Design Highlights

- Page Object Model for reusable selectors
- Custom commands for reusable authentication flows
- `cy.session()` for optimized authenticated test setup
- Dynamic test data generation for registration
- Fixtures for static test data
- Data-driven testing for multiple login scenarios
- `cy.intercept()` for network synchronization
- `cy.intercept()` for controlled backend error stubbing
- `cy.request()` for API-level validation
- UI + API validation within the same business flow
- Verification of persisted data after page reload
- Test scenarios designed to avoid dependency on execution order
- No arbitrary fixed waits such as `cy.wait(5000)`
- Headless execution of the complete test suite
- Automated CI execution with GitHub Actions

## Project Structure

```text
cypress/
├── e2e/
│   ├── accounts/
│   │   ├── accounts-error.cy.js
│   │   ├── accounts-overview.cy.js
│   │   └── open-new-account.cy.js
│   ├── auth/
│   │   ├── login.cy.js
│   │   └── registration.cy.js
│   ├── loan/
│   │   └── request-loan.cy.js
│   ├── payments/
│   │   └── bill-pay.cy.js
│   ├── profile/
│   │   └── update-contact-info.cy.js
│   ├── transactions/
│   │   ├── find-transactions.cy.js
│   │   └── transaction-details.cy.js
│   ├── transfer/
│   │   └── transfer-funds.cy.js
│   └── smoke.cy.js
├── fixtures/
│   └── payee.json
├── pages/
│   ├── LoginPages.js
│   └── RegistrationPage.js
├── support/
│   ├── commands.js
│   └── e2e.js
└── utils/
    └── testData.js
```

## Installation

Clone the repository and install dependencies:

```bash
npm install
```

## Running Tests

Run the full test suite in headless mode:

```bash
npm test
```

Run Cypress in interactive mode:

```bash
npm run cy:open
```

Run Cypress directly in headless mode:

```bash
npm run cy:run
```

## Continuous Integration

GitHub Actions automatically runs the Cypress test suite on:

- pushes to the `main` branch
- pull requests targeting the `main` branch

The workflow is located in:

```text
.github/workflows/cypress-tests.yml
```

## Application Under Test

ParaBank demo application:

`https://parabank.parasoft.com/parabank`

## Test Data

The project uses different test-data strategies depending on the scenario:

- dynamically generated data for new-user registration
- fixture-based static data for bill payment
- reusable demo credentials for authenticated banking scenarios

This keeps tests readable while avoiding unnecessary duplication and hard-coded unique data.

## Current Test Results

The complete suite currently contains **16 automated tests**.

Latest local headless execution:

```text
16 passing
0 failing
```

The same suite is also executed automatically through GitHub Actions.
