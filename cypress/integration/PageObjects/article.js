/// <reference types = "Cypress"/>
class Article {

    checkArticleHeader(title) {
        cy.get('h1')
          .first()
          .should('have.text', title);
    }
    checkArticleSummary(title) {
        cy.get('div')
          .should('contain.text',title);
        }

    checkArticleAuthor(title) {
      cy.contains('a',title)
    }

    checkArticlePublishedDate(title) {
      cy.contains('p',title)
    }

    checkArticleAuthorImage() {
        cy.get('img')
        .should('have.class','rounded-full object-cover w-48 h-48 text-sm font-semibold leading-7 text-sonic-silver')
    }

    checkArticleFeatureImage() {
      cy.get('img')
        .should('have.class','rounded w-full object-cover h-full')
    }
    
    checkKeyword(title) {
      cy.get('a[href*="/keywords/'+title+'"]')
    }

    checkShareFacebook()
    {
      cy.get('span').should('have.class','share-sns facebook')
    }
}
export default Article