import { When, Then } from "cypress-cucumber-preprocessor/steps";

When("I visit duckduckgo.com", () => {
  cy.visit("https://www.duckduckgo.com");
});

Then("I should see a search bar", () => {
  cy.get("input").should(
    "have.attr",
    "placeholder",
    "Search the web without being tracked"
  );
})
/** 
Then(`I should see the module Last News with {} items and title as {string}`, (numOfItem, titleName) =>{
    // var itemCount = parseInt(numOfItem);
    homePage.checkModuleLastNewTitle(titleName)
}
*/
