import { When } from "cypress-cucumber-preprocessor/steps";

When(`I visit {string}`, (url) => {
  cy.visit(url)
})