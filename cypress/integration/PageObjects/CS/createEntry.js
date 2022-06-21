/// <reference types = "Cypress"/>
/// <reference types="cypress-xpath" />

export const createEntry = new class CreateEntry{
    GoToCS(csName){
        cy.get('h4', {timeout: 60000}).find('div').find('span').contains(csName).click();
    };
    clickEntryMenu(menuName){
       var menuLocator = '//a[@aria-label="'+ menuName+ '"]'
        cy.xpath(menuLocator).click();
    };
    searchContentType(contentTypeName){
        cy.get('.Search__input', {timeout: 60000}).click().type(contentTypeName).trigger('mouseover');
    }
    clickContentType(contentTypeName){
        // var text = contentTypeName.toLowerCase();
        // var locator = '#'+text;
        cy.get('.ListRow', {timeout: 60000}).find('div').contains(contentTypeName).click({ force: true });
    }
    clickAddNewEntry(){
        cy.xpath('//*[@name="AddPlus"]',{timeout: 60000}).click({force: true});
    }
    clickProceed(){
        cy.xpath('//div[contains(text(),"Proceed")]', {timeout: 200000}).invoke('show').should('be.visible');
        cy.xpath('//div[contains(text(),"Proceed")]').click();
    }
}