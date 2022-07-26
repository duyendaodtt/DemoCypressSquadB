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

Then(`Response body of {string} should have total items is not null`, (contentQuery)=>{
    // cy.get('body').then((responseBody)=>{
    //     var fieldName = `response.body.data.${contentQuery}.meta.total`
    //     responseBody.itself(fieldName).should('not.eq', null)
    // })
    cy.then( () =>{
        let fieldName = `data.${contentQuery}.meta.total`
        cy.log('@body')
        // cy.get('body').its(fieldName).should('be.gte', null)
        cy.get('@body').its(fieldName).as('totalItem')
        cy.get('@totalItem').then((totalItem) =>{
            expect(totalItem).be.greaterThan(0)
        })
        
    }
        
    )
    // var fieldName = `response.body.data.${contentQuery}.meta.total`
    // cy.wait('@body')
    //   .its(fieldName)
    //   .should('not.eq', null)
})

