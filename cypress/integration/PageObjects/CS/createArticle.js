/// <reference types = "Cypress"/>
/// <reference types="cypress-xpath" />

export const createArticle = new class CreateArtilce{
    createHeadline(headlineText){
        cy.xpath('//input[@name="title"]').click().type(headlineText);
    }
}