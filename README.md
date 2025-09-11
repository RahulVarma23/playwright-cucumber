# Playwright-Cucumber Project

This project uses [Playwright](https://playwright.dev/) and [Cucumber.js](https://cucumber.io/) for end-to-end testing.

## Prerequisites

- [Node.js](https://nodejs.org/) v14 or higher
- [npm](https://www.npmjs.com/) (comes with Node.js)

## Setup

1. **Clone the repository**
   ```sh
   git clone <repository-url>
   cd Playwright-Cucumber
   ```

2. **Install dependencies**
   ```sh
   npm install
   ```

## Running Tests

To execute all tests:
```sh
npm test
```

## Generating Reports

After running tests, generate an HTML report:
```sh
npm run generate-report
```
The report will be available in the `reports/` directory.

## Project Structure

- `features/` — Cucumber feature files
- `step-definitions/` — Step definitions for features
- `set-up/` — Hooks and configuration
- `reports/` — Test reports (gitignored)
- `package.json` — Project configuration and scripts

## Useful Commands

- Run tests: npm test
 
- Generate HTML report:  npm run generate-report

## Notes

- The `node_modules/` and `reports/` directories are excluded from version control.
- Commit your `package-lock.json` for consistent dependency management.