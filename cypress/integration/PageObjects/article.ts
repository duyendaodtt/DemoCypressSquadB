/// <reference types = "Cypress"/>
import {utils} from "../../support/CheckFunction"
export const article = new class Article {

    checkArticleHeader(locator, headerText) {
      utils.checkLocatorHaveText(locator,headerText);
    }
    checkArticleSummary(locator, summaryValue) {
      utils.checkLocatorContains(locator, summaryValue);
        }

    checkArticleAuthor(locator, authorName) {
      // cy.contains('a',title)
      utils.checkXpathHaveText(locator, authorName);
    }

    checkArticlePublishedDate(locator, publishDate) {
      utils.checkXpathContains(locator, publishDate);
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

    // checkblabla(){
    //   cy.get('img').should('satisfy', hasAtLeastOneClass())
    // }
    
}