/// <reference types = "Cypress"/>
import {Given, When, Then, defineParameterType} from "cypress-cucumber-preprocessor/steps";
import {apiPost} from "../PageObjects/apiSend"

var request = require('request');
const jsonAssertion = require("soft-assert")
// defineParameterType({
//     name: "boolean",
//     regexp: /true|false/,
//     transformer: (s) => s === "true" ? true : false
//   });

When(/^I make a (.*?) request to (.*)$/, (requestMethod, url) => {
    cy.request(requestMethod, url).then((res) => {
        cy.wrap(res.status).as('status');
        cy.wrap(res.headers).as('headers');
        cy.wrap(res.body).as('body');
    }).as('req');
});

When(/^I make (.*) request to (.*?) with body from (.*) file$/, (requestMethod, requestUrl, path) => {
    var newpath = '/inputAPI/' + path + '.txt'
    cy.fixture(newpath).then((jsonBody) => {
        apiPost.postMethod(requestMethod, requestUrl, jsonBody)
    })
});


