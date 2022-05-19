import { Given } from "cypress-cucumber-preprocessor/steps";

// const url = 'https://google.com'
Given('I visit Quantum page', () => {
  cy.visit('https://www.quantumbusinessnews.com/')
})