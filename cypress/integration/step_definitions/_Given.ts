import { Given } from "cypress-cucumber-preprocessor/steps";

Given('I visit Quantum page', () => {
  cy.visit('https://www.quantumbusinessnews.com/')
})
