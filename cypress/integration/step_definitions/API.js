// / <reference types = "Cypress"/>
import {Given, When, Then, defineParameterType} from "cypress-cucumber-preprocessor/steps";
import {newEntry} from "../PageObjects/Create/newEntry";
var request = require('request');
const jsonAssertion = require("soft-assert")
// defineParameterType({
//     name: "boolean",
//     regexp: /true|false/,
//     transformer: (s) => s === "true" ? true : false
// });

When(/^I make a (.*?) request to (.*)$/, (requestMethod, url) => {
    cy.request({
        method: requestMethod,
        url: url,
        headers: {
            'authtoken': 'blt370e8911b939523d',
            'api_key': 'bltbbbdd615c0ee9096'
        },
        body: null
    }).as('req');
});

When(/^I make (.*) request to (.*?) with body from (.*) file$/, (requestMethod, requestUrl, path) => {
    var newpath = '/inputAPI/' + path + '.json'
    cy.fixture(newpath).then((jsonBody) => {
        cy.api({
            method: requestMethod, url: requestUrl,
            // json: true,
            body: jsonBody
        }).then((res) => {
            cy.wrap(res.status).as('status');
            cy.wrap(res.headers).as('headers');
            cy.wrap(res.body).as('body');
        }).as('req');
    })
});

When(/^I create new (.*) entry with authtoken as (.*) and api_key as (.*) and body from (.*)$/, (contentType, authtoken, api_key, path) => {
    var newpath = '/inputAPI/' + path + '.json'
    cy.fixture(newpath).then((jsonBody) => {
        newEntry.createNewEntry(contentType, authtoken, api_key, jsonBody);
    })
});


Then(`Response code is {int}`, (responseCode) => {
    cy.get('@status').then(code => {
        expect(code).eq(responseCode);
    })
});
