/// <reference types = "Cypress"/>
/// <reference types="cypress-xpath" />
class Article {

    checkArticleHeader(title) {
        cy.get('h1')
          .first()
          .should('have.text', title)
    }

    checkArticleSummary(title) {
        cy.get('div')
          .should('have.class', 'mt-12 text-sonic-silver')
          .and('have.text',title)
        }
}
export default Article