describe('Homepage', () => {
  it('should display the welcome message', () => {
    // This test will run inside the CircleCI environment
    // where it will start your app on localhost:3000
    cy.visit('http://localhost:3000/');

    // It looks for an <h1> tag that contains the text "Welcome to"
    cy.contains('h1', 'Welcome to').should('exist');
  });
});
