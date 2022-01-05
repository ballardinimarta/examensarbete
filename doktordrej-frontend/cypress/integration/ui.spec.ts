
describe('Navigation', () => {
    it('should navigate to the shop page', () => {
      cy.visit('http://localhost:3000/')

      cy.get('.Nav_navBar__MsH_H > div').click()
  
      cy.get('a[href*="/shop"]').click()
  
      cy.url().should('include', '/shop')
  
      cy.get('span').contains('Shop')
    })
})

describe('Shop', () => {
  it('should show more when button is pressed', () => {
    cy.visit('http://localhost:3000/shop')

    cy.get('.Shop_articleTitle__Dj0DM').contains('second article').should('not.exist')

    cy.get('.blackButton').click()

    cy.get('.Shop_articleTitle__Dj0DM').contains('second article')

  })

  it('should go to item page when image is clicked', () => {
    cy.visit('http://localhost:3000/shop')

    cy.get('.Shop_articleImage__I8DOr').click()

    cy.url().should('include', '/artikel/')

    cy.get('.Article_articleDescription__ZgzfY')
  })
})

describe('Galleri', () => {
  it('should show more when button is pressed', () => {
    cy.visit('http://localhost:3000/galleri')
    .then(()=>{
      cy.get('.Galleri_instagramFeed__o8xmP').children().should('have.length', 25)
    })

    cy.get('.blackButton').click()
    .then(()=>{
      cy.get('.Galleri_instagramFeed__o8xmP').children().should('have.length.greaterThan', 25)
    })
  })
})
