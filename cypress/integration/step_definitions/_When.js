import { When } from "cypress-cucumber-preprocessor/steps";

When(`I visit {string}`, (title) => {
  cy.visit(title)
})