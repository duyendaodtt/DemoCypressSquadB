/// <reference types = "Cypress"/>

class SharedObject{

    //Check if locator have text
    checkLocatorHaveText(locator, txt) {
      cy.get(locator, { timeout: 10000 }).should('be.visible')
        .should('have.text', txt);
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
    checkLocatorFirstHaveText1(locator, className) {
      cy.get(locator) 
        .should('have.class', className);
    }
    //Check if locator have class
    checkLocatorClassHaveText(locator, className) {
      cy.get(locator)
        .should('have.class', className);
    }

    checkContainsText(text) {
      cy.contains(text, {timeout: 10000})
    }

}

export default SharedObject