// https://docs.cypress.io/api/introduction/api.html

describe('My First Test', () => {
  it('visits the app root url', () => {
    cy.visit('/')
    cy.contains('h1', 'You did it!')
    cy.viewport('macbook-15')
    cy.viewport('macbook-13')
    cy.viewport('ipad-2')
    cy.viewport('iphone-6+')
  })
})
