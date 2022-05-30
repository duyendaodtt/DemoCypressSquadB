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

    checkArticleAuthor(title) {
      cy.contains('a',title)
    }

    checkArticlePublishedDate(title) {
      cy.contains('p',title)
    }

    checkArticleAuthorImage() {
        cy.get('.w-48.h-48').should('have.attr','src').should('contain','auto=webp&format=png')
    }

    checkArticleFeatureImage() {
      cy.get('img')
        .should('have.class','rounded w-full object-cover h-full')
    }

    checkFeatureImageCaption(){
      cy.get('div').should('have.class','mt-12 text-base leading-5 text-sonic-silver')
    }
    
    checkKeyword(title) {
      cy.get('a[href*="/keywords/'+title+'"]')
    }

    checkblabla(){
      cy.get('img').should('satisfy', hasAtLeastOneClass())
    }
    
}
export default Article