import { Given } from "cypress-cucumber-preprocessor/steps";

Given('I visit Quantum page', () => {
  cy.visit('https://www.quantumbusinessnews.com/applications/how-financial-services-can-benefit-from-quantum-computing-solutions')
});

Given(`I open {string} page`, (actualUrl: string) => {
  cy.visit(actualUrl, {timeout: 30000});
});

Given(`I visit the page via {string}`, (actualUrl) => {
    cy.visit(actualUrl);
})
