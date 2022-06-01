import { Given } from "cypress-cucumber-preprocessor/steps";

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})

Given('I visit Quantum page', () => {
  cy.visit('https://www.quantumbusinessnews.com/')
})

Given('I open {string} page', (actualUrl) => {
  cy.visit(actualUrl, {timeout:30000})
})