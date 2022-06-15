/// <reference types = "Cypress"/>
class HomePage {
    checkModuleLastNew(listLength, moduleTitle) {
        /**
         * @param listLength: the number of item should be displayed on this module 
         * @param moduleTitle - title of this module 
         */
        var listLength = listLength + 1;
        cy.get('ul >> li')
          .should('have.length', listLength);
        cy.get('ul >> li')
          .first()
          .should('have.text', moduleTitle)
    }

    checkModuleLastNewTitle(title) {
        cy.get('ul >> li')
          .first()
          .should('have.text', title)
    }
}
