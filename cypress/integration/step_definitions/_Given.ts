import { Given } from "cypress-cucumber-preprocessor/steps";

Given('I visit Quantum page', () => {
  cy.visit('https://www.quantumbusinessnews.com/')
})

Given('I open {string} page', (actualUrl: string) => {
  cy.visit(actualUrl, {timeout:30000})
})
