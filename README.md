# Playwright Automated Testing - Singlish to Sinhala Translator

**Student Registration Number:** [IT23716346]  
**Module:** IT3040 - ITPM  
**Assignment:** Assignment 1

---

## Project Description

This project contains automated test cases for the Singlish to Sinhala translation system available at [https://www.swifttranslator.com/](https://www.swifttranslator.com/).

The test suite includes:
- 24 Positive functional test cases
- 10 Negative functional test cases
- 1 UI test case

**Total: 35 automated test cases**

---

## Prerequisites

Before running the tests, ensure you have the following installed on your system:

1. **Node.js** (version 16 or higher)
   - Download from: [https://nodejs.org/](https://nodejs.org/)
   - Verify installation: `node --version`

2. **npm** (comes with Node.js)
   - Verify installation: `npm --version`

---

## Installation Instructions

Follow these steps to set up and run the tests:

### Step 1: Clone the Repository
```bash
git clone [YOUR_REPOSITORY_URL_HERE]
cd IT23716346
```

### Step 2: Install Dependencies
```bash
npm install
```

This will install Playwright and all required dependencies.

### Step 3: Install Playwright Browsers
```bash
npx playwright install chromium
```

This downloads the Chromium browser used for testing.

---

## Running the Tests

### Run All Tests

To execute all test cases:
```bash
npx playwright test
```

---

## Test Results

Expected test results:
- **Positive tests (24):** Should PASS ✅
- **Negative tests (10):** Should FAIL ❌ (documenting system weaknesses)
- **UI test (1):** Should PASS ✅

---

## Configuration

The project is configured to:
- Run tests on **Chromium** browser only
- Use **smart waiting** to handle dynamic content loading

---

## Troubleshooting

### Tests are failing randomly
- Make sure your internet connection is stable
- The translation website might be slow or down
- Try running tests with: `npx playwright test --workers=1`

### Browser doesn't open
- Ensure Playwright browsers are installed: `npx playwright install`
- Check `playwright.config.js` has `headless: false` if you want to see the browser

### Module not found errors
- Delete `node_modules` folder and `package-lock.json`
- Run `npm install` again

---

## Acknowledgments

- Assignment by: IT3040 - ITPM Module
- Testing Framework: Playwright
- Target Application: https://www.swifttranslator.com/