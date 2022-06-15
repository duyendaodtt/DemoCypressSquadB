import {Given, When, Then} from "cypress-cucumber-preprocessor/steps";
var request = require('request');

When(/^I make a (.*?) request to (.*)$/, (requestMethod, url) => {
    cy.request(requestMethod, url).then((res) => {
        cy.wrap(res.status).as('status');
        cy.wrap(res.headers).as('headers');
        cy.wrap(res.body).as('body');
    }).as('req');
});

When(/^I make a (.*) request to (.*?) with body from (.*)$/, (requestMethod, requestUrl, path) => {
    var bodyjson = require(path);

    cy.api({
            method: requestMethod,
            url: requestUrl,
            body: bodyjson
        }).then((res) => {
        cy.wrap(res.status).as('status');
        cy.wrap(res.headers).as('headers');
        cy.wrap(res.body).as('body');
    }).as('req');
});

When(`I make {string} request to {string} with body from {}`, (requestMethod, requestUrl, path) => {
    var bodyjson = require(path);
    cy.api({
            method: requestMethod,
            url: requestUrl,
            body: bodyjson
        }).then((res) => {
        cy.wrap(res.status).as('status');
        cy.wrap(res.headers).as('headers');
        cy.wrap(res.body).as('body');
    }).as('req')
});

Then(`Response code is {int}`, (responseCode) => {
    cy.get('@status').then((stt) => {
        expect(stt).eq(responseCode)
    })
});

Then(`Response header containts {string}`, (txtContaint) => {
    cy.get('@headers').then((header) => {
        expect(header).contain(txtContaint)
    })
});

Then(`Response body containts {string}`, (txtContaint) => {
    cy.get('@headers').then((header) => {
        expect(header).eq(txtContaint)
    })
});
