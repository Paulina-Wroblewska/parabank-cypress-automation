# ParaBank Cypress Test Automation

Automated end-to-end test project for the ParaBank demo application using Cypress and JavaScript.

The project focuses on maintainable test design, reusable components, test isolation, dynamic test data, API validation, and network stubbing.

## Tech Stack

- Cypress 16
- JavaScript
- Node.js
- Page Object Model
- Custom Cypress Commands
- Fixtures
- REST API validation

## Covered Scenarios

- Smoke test
- Login with valid credentials
- Login with invalid credentials
- User registration with dynamically generated data
- Logout and re-login using newly created credentials
- Accounts overview
- Transfer between accounts
- Bill payment
- Find transactions by amount
- Open new savings account
- Loan request
- Backend failure handling with stubbed HTTP 500 response
- UI action validated through REST API

## Test Design Highlights

- Page Object Model for reusable selectors
- Custom commands for reusable login flows
- `cy.session()` for optimized authenticated test setup
- Dynamic test data for registration
- Fixtures for static test data
- `cy.intercept()` for network synchronization and error stubbing
- `cy.request()` for API-level validation
- Independent test scenarios
- No arbitrary fixed waits
- Headless execution of the complete test suite

## Project Structure

```text
cypress/
├── e2e/
│   ├── accounts/
│   ├── auth/
│   ├── loan/
│   ├── payments/
│   ├── transactions/
│   ├── transfer/
│   ├── accounts-overview.cy.js
│   └── smoke.cy.js
├── fixtures/
├── pages/
├── support/
└── utils/
```

## Installation

```bash
npm install
```

## Run Tests

Run the full test suite in headless mode:

```bash
npm test
```

Open Cypress Test Runner:

```bash
npm run cy:open
```

## Application Under Test

ParaBank demo application:

`https://parabank.parasoft.com/parabank`

## Test Results

The complete suite currently contains 11 automated tests and passes successfully in headless mode.
