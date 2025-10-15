// cypress/support/e2e.js

// Import commands.js if you have custom commands
import './commands'

// You can add global setup here, like:
Cypress.on('uncaught:exception', (err, runnable) => {
  // Prevent Cypress from failing tests due to uncaught exceptions
  return false
})

