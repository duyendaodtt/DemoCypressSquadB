/// <reference types = "Cypress"/>
/// <reference types="cypress-xpath" />

export const createArticle = new class CreateArtilce{
    createHeadline(headlineText){
        cy.xpath('//input[@name="title"]').click().type(headlineText);
    }
    createAuthor(authorName){
        cy.xpath('//div[@data-fieldname="author_page"]/child::div/descendant::button').click();
        var authorLocator = '//div[@role="cell"]/child::div[contains(text(),"' + authorName+  '")]'
        cy.xpath(authorLocator, {timeout: 30000}).check()
        cy.xpath('//div[contains(text(),"Add Selected Entries")]', {timeout: 30000}).click()
    }
    
}