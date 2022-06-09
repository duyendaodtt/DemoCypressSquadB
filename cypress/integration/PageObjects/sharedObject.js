/// <reference types = "Cypress"/>

class SharedObject{

    //Check if locator have text
    checkLocatorHaveText(locator, txt) {
      cy.get(locator)
        .should('have.text', txt);
    }
    //Check if locator containts text
    checkLocatorContaints(locator, txt) {
      cy.get(locator)
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
    //Check if locator have attr that containts text
    checkLocatorClassHaveText(locator, attribute,txt) {
      cy.get(locator)
        .should('have.attr', attribute).should('contain',txt);
    }

    //Check if locator have attr that containts text
    checkLocatorClassHaveText(locator, attribute,txt) {
      cy.get(locator)
        .should('have.attr', attribute).should('contain',txt);
    }

    //Check if locator have class and have text
    checkLocatorClassHaveAndContainsText(locator, className,txt) {
      cy.get(locator)
        .should('have.class', className).should('have.text',txt);
    }

     //Check if locator have class and containts text
     checkLocatorClassHaveAndContainsText(locator, className,txt) {
      cy.get(locator)
        .should('have.class', className).should('contain',txt);
    }

    //Check if link contains text in  URL
    checkLinkContainsTextInURL(txt) {
      cy.get('a[href*="'+txt+'"');
    }
}

export default SharedObject