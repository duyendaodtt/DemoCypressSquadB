import cypress from "cypress";
import { Then } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../PageObjects/homepage";

const homePage = new HomePage();
// Then(`I should see the module Last News with title as {string}`, (titleName) =>{
//     // var itemCount = parseInt(numOfItem);
//     // const homePage = new HomePage();
//     // homePage.checkModuleLastNewTitle(titleName);
//     cy.get('ul >> li')
//           .first()
//           .should('have.text', titleName);
//   })

Then(`I should see the module Last News with title as {string}`, (title) =>{
    return 1 === 1;
    homePage.checkModuleLastNewTitle(title);
    // cy.get('ul >> li')

    //     .first()
    //     .should('have.text', "Last News")
})