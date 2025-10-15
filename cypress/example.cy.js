// cypress/e2e/example.cy.js
describe('Lightsail server check', () => {
  it('Visits the homepage', () => {
    cy.visit('/')  // Uses baseUrl from cypress.config.js
    cy.contains('Next')  // Adjust to some text your homepage actually has
  })
})

