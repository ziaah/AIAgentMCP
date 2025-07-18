# AIAgentMCP - Playwright Test Automation Project

This project contains end-to-end tests using Playwright Test framework. It includes automated tests for the Sauce Demo website (https://www.saucedemo.com/) demonstrating login, product selection, and checkout processes.

## Features

- End-to-end test automation using Playwright
- Cross-browser testing (Chromium, Firefox, and WebKit)
- Page Object Model pattern
- Automated login and checkout flow tests
- Test reporting capabilities

## Prerequisites

- Node.js (latest LTS version recommended)
- npm (comes with Node.js)
- Visual Studio Code (recommended)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/ziaah/AIAgentMCP.git
cd AIAgentMCP
```

2. Install dependencies:
```bash
npm install
```

3. Install Playwright browsers:
```bash
npx playwright install
```

## Test Scenarios

### Sauce Demo E2E Test
Located in `tests/saucedemo.spec.js`, this test covers:
- Login with standard user credentials
- Product selection and cart addition
- Checkout process validation
- Order completion verification

## Running Tests

Run all tests:
```bash
npx playwright test
```

Run Sauce Demo tests specifically:
```bash
npx playwright test tests/saucedemo.spec.js
```

Run tests in UI mode:
```bash
npx playwright test --ui
```

Run tests in specific browsers:
```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

Run tests in debug mode:
```bash
npx playwright test --debug
```

## Project Structure

```
AIAgentMCP/
├── tests/
│   ├── example.spec.js
│   └── saucedemo.spec.js
├── tests-examples/
│   └── demo-todo-app.spec.js
├── playwright.config.js
├── package.json
└── README.md
```

## Test Reports

After running tests, you can view the HTML report:
```bash
npx playwright show-report
```

## Development

To generate new tests using Playwright's Codegen:
```bash
npx playwright codegen
```

## Resources

- [Playwright Documentation](https://playwright.dev/docs/intro)
- [Playwright Test API Reference](https://playwright.dev/docs/api/class-test)
- [Playwright Best Practices](https://playwright.dev/docs/best-practices)
- [Sauce Demo Website](https://www.saucedemo.com/)
