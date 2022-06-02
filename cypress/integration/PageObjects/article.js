/// <reference types = "Cypress"/>
import SharedObject  from "./sharedObject";
const shareFunction = new SharedObject()
class Article {

    checkArticleHeader(locator, headerText) {
      shareFunction.checkLocatorHaveText(locator,headerText);
    }
    checkArticleSummary(locator, summaryValue) {
        shareFunction.checkLocatorContains(locator, summaryValue);
        }

    checkArticleAuthor(locator, authorName) {
      // cy.contains('a',title)
      shareFunction.checkXpathHaveText(locator, authorName);
    }

    checkArticlePublishedDate(locator, publishDate) {
      shareFunction.checkXpathContains(locator, publishDate);
      // shareFunction.checkLocatorContains(locator, publishDate);
      // cy.contains('p',title)
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