/// <reference types = "Cypress"/>
class Article {

    checkArticleHeader(locator, title) {
      cy.get(locator)
        .first()
        .should('have.text', title);
    }
    checkArticleSummary(locator, title) {
        cy.get(locator)
          .should('contain.text',title);
        }
        
    checkKeyword(title) {
      cy.get('a[href*="/keywords/'+title+'"]')
    }

    checkblabla(){
      cy.get('img').should('satisfy', hasAtLeastOneClass())
    }
    
}
export default Article