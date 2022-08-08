/// <reference types = "Cypress"/>
import exp from "constants";
import { Then, defineParameterType} from "cypress-cucumber-preprocessor/steps";
import { each } from "cypress/types/bluebird";
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
        // cy.get('body').its(fieldName).should('be.gte', null)
        cy.get('@body').its('data').then((items) =>{
            expect(Object.keys(items).length).equal(1, `Query for ${contentType} return correctly with ${Object.keys(items).length} item`)
        })
    })
})

Then(`Response body of {string} should have 1 content`, (contentType)=>{
    cy.then(()=>{
        let fieldName = `data.${contentType}`
        // cy.get('body').its(fieldName).should('be.gte', null)
        cy.get('@body').its(fieldName).then((items) =>{
            expect(Object.keys(items).length).equal(1, `Query return correctly with ${Object.keys(items).length} item`)
        })
    })
})

Then(/^Required fields for response of (.*) should not empty$/, (contentQuery) =>{
    cy.then(()=>{
        if(contentQuery.includes('all')){
            let fieldName = `data.${contentQuery}.items`
            cy.get('@body').its(fieldName).as('entries')
            cy.get('@entries').each(
                entry => {
                    var requiredFields = ["title", "mobileHeadline", "body", "basicPageDisplayOption", "seo.metaTitle", "seo.metaDescription"]
                    // read the response
                    requiredFields.forEach(fieldName=>{
                        cy.log(entry.fieldName).as('requiredField')
                        expect(entry.fieldName).not.null
                    })
                    
                }
            )         // wait for intercept instead of cy.wait(3000)
            // then((items) =>{
            //     // items.forEach((item) =>{
                    
            //     // //     requiredFields.forEach(fieldName=>{
            //     // //         cy.get(item).its(fieldName).as('requiredField')
            //     // //         cy.log('@requiredField').as('requiredField')
            //     // //         // expect(item).its(fieldName).not.null 
            //     // // })
                
            //     // }) 
            // })
        }
        if(contentQuery.includes('page')){
            let fieldName = `data.${contentQuery}.content`
            cy.get('@body').its(fieldName).then((item) =>{
                var requiredFields = ["title", "mobileHeadline", "body", "basicPageDisplayOption", "seo.metaTitle", "seo.metaDescription"]
                requiredFields.forEach(fieldName=>{
                    cy.log(item).its(fieldName).as('checkField')
                    // cy.get(item).its(fieldName).as('checkedField')
                    expect(item).its(fieldName).not.null
                })
            })
        }
        else{
            cy.get('@body').its('data').then((item) =>{
                var requiredFields = ["title", "mobileHeadline", "body", "basicPageDisplayOption", "seo.metaTitle", "seo.metaDescription"]
                requiredFields.forEach(fieldName=>{
                    cy.get(item).its(fieldName).as('checkedField')
                    expect('@checkedField').not.null
                })
            })
        }
        
    })
})