describe('My First Test', () => {
    it('Visits the app root url', () => {
      cy.visit('http://localhost:8080/')
      cy.get('h1').contains("Vue Grid Layout")
    })
  })