/// <reference types = "Cypress"/>
/// <reference types="cypress-xpath" />

class SharedObject{

    //Check if locator have text
    checkLocatorHaveText(locator, txt) {
      cy.get(locator, { timeout: 10000 }).should('be.visible')
        .should('have.text', txt);
    }

     //Check if xpath have text
     checkXpathHaveText(locator, txt) {
      cy.xpath(locator).invoke('text').then((text) => {
        expect(text.trim()).equal(txt)
      });

      // cy.xpath(locator, { timeout: 10000 }).should('be.visible')
      //   .should('have.text', txt);
    }
    //Check if xpath containts text
    checkXpathContains(locator, txt) {
      cy.xpath(locator, { timeout: 10000 }).should('be.visible')
        .should('contain', txt);
    }

    //Check if locator containts text
    checkLocatorContains(locator, txt) {
      cy.get(locator, { timeout: 10000 }).should('be.visible')
        .should('contain', txt);
    }
    //Check if first locator have text
    checkLocatorFirstHaveText(locator, txt) {
      cy.get(locator)
      .first()
        .should('have.text', txt);
    }
    //Check if locator have class
    checkLocatorFirstHaveText(locator, className) {
      cy.get(locator) 
        .should('have.class', className);
    }
    //Check if locator have class
    checkLocatorClassHaveText(locator, className) {
      cy.get(locator)
        .should('have.class', className);
    }

}

export default SharedObject