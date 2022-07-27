/// <reference types = "Cypress"/>
import { Then, defineParameterType} from "cypress-cucumber-preprocessor/steps";
import {validateSchema } from "../PageObjects/apiCheck"
var request = require('request');
const jsonAssertion = require("soft-assert")
defineParameterType({
    name: "boolean",
    regexp: /true|false/,
    transformer: (s) => s === "true" ? true : false
  });
  Then(`Response code is {int}`, (responseCode) => {
    cy.get('@status').then(code => {
        expect(code).eq(responseCode);
    })
});

Then(`Response header contains {string}`, (txtContain) => {
    cy.get('@headers').then((header) => {
        expect(header).contain(txtContain)
    })
});

Then(`Response body should have {string} field with value as {string}`, (fieldName, fieldValue) => {
    cy.get('@body').then((responseBody) => {
        expect(responseBody).has.property(fieldName,fieldValue);
        
    });
});
   
Then(`Response body should have {string} field with value as {int}`, (fieldName, fieldValue) => {
    cy.get('@body').then((responseBody) => {
        expect(responseBody).has.property(fieldName,fieldValue);
    })
});

Then(`Response body should have {string} field with value as {boolean}`, (fieldName, fieldValue) => {
    cy.get('@body').then((responseBody) => {
        expect(responseBody).has.property(fieldName,fieldValue);
    })
});

Then(`Response headers should have {string} field}`, (fieldName) => {
    cy.get('@headers').then((responseBody) => {
        expect(responseBody).has.property(fieldName);
    })
});