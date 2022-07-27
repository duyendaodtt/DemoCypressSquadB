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
    cy.then( () =>{
        let fieldName = `data.${contentQuery}.meta.total`
        cy.log('@body')
        // cy.get('body').its(fieldName).should('be.gte', null)
        cy.get('@body').its(fieldName).as('totalItem')
        cy.get('@totalItem').then((totalItem) =>{
            expect(totalItem).be.greaterThan(0)
        }) 
    }  )
})

Then(`Response body of {string} should have total items is 1`, (contentType)=>{
    cy.then(()=>{
        let fieldName = `data.${contentType}`
        // cy.get('body').its(fieldName).should('be.gte', null)
        cy.get('@body').its(fieldName).then((items) =>{
            expect(Object.keys(items).length).equal(1, `Query return correctly with ${Object.keys(items).length} item`)
        })
    })
})

