/* eslint-disable no-undef */
describe('My First Test', () => {
  function movePiece (number, x, y) {
    cy.get('.vue-grid-item.vue-resizable.cssTransforms').first()
    .trigger('mousedown', { which: number })
    .trigger('mousemove', { which: number ,clientX: x, clientY: y })
    .trigger('mouseup', { force: true })
  }
  it('Visits the app root url', () => {
    cy.visit('http://localhost:8080/')
    cy.get('h1').contains("Vue Grid Layout")
  })

  it.only('moves the piece when dragged to valid place', function () {
    // cy.viewport(550, 350)
    cy.visit('http://localhost:8080/')
    cy.wait(1000)
    // movePiece(1, 20, 20)
    cy.get('#content > div.vue-grid-layout > div:nth-child(1) > div > span.text')
    .trigger('mousedown',{ which:1,force:true})
    .trigger('mousemove', { clientX: 335, clientY: 90 })
    .trigger('mouseup', { force: true })
    // cy.get('.pieces li').eq(3).find('span').should('not.exist')
    // cy.get('.places li').eq(0).find('span').should('have.class', 'piece-1')
  })
})