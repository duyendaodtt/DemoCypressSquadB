/// <reference types = "Cypress"/>
/// <reference types="cypress-xpath" />

export const utils = new  class SharedObject{

    //Check if locator have text
    checkLocatorHaveText= (locator: string, txt: string): void => {
      cy.get(locator, { timeout: 10000 }).should('be.visible')
        .should('have.text', txt);
    }

     //Check if xpath have text
     checkXpathHaveText= (locator: string, txt: string): void =>  {
      cy.xpath(locator).invoke('text').then((text) => {
        expect(text.trim()).equal(txt)
      });
    }
    //Check if xpath containts text
    checkXpathContains= (locator: string, txt: string): void =>  {
      cy.xpath(locator, { timeout: 10000 }).should('be.visible')
        .should('contain', txt);
    }

    //Check if locator containts text
    checkLocatorContains= (locator: string, txt: string): void =>  {
      cy.get(locator, { timeout: 10000 }).should('be.visible')
        .should('contain', txt);
    }
    //Check if first locator have text
    checkLocatorFirstHaveText= (locator: string, txt: string): void =>  {
      cy.get(locator)
        .first()
        .should('have.text', txt);
    }
    //Check if locator have class
    checkLocatorFirstHaveClass= (locator: string, className: any): void => {
      cy.get(locator) 
        .should('have.class', className);
    }
    //Check if locator have class
    checkLocatorClassHaveText= (locator: string, className: any): void =>  {
      cy.get(locator)
        .should('have.class', className);
    }

}
