describe('Navigation', () => {
  it('should navigate to Home page', () => {
    cy.visit('/')
    cy.contains('Home').click({ force: true });
  })

  it('should navigate to About page', () => {
    cy.visit('/')
    cy.get('a[href="/about"]').click()
    cy.contains('About').click({ force: true });
  })

  it('should navigate to Portfolio page', () => {
    cy.visit('/')
    cy.get('a[href="/portfolio"]').click()
    cy.contains('Portfolio').click({ force: true });
  })
})