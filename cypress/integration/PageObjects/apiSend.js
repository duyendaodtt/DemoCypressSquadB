// / <reference types = "Cypress"/>

import { env } from "process";



export const apiPost = new class APIPost {
    postMethod(requestMethod, requestUrl, jsonBody) {
        cy.api({
            method: requestMethod, url: requestUrl,
            // json: true,
            body: jsonBody
        }).then((res) => {
            cy.wrap(res.status).as('status');
            cy.wrap(res.headers).as('headers');
            cy.wrap(res.body).as('body');
        }).as('req');
    }

    postRequestWithHeaders(requestMethod, requestUrl, jsonBody) {
        cy.api({
            method: requestMethod,
            url: requestUrl,
            headers: {
                'api_key': fixtures.api_key,
                'authtoken': fixtures.authtoken,
                'Content-Type': 'application/json'
            },
            body: jsonBody
        }).then((res) => {
            cy.wrap(res.status).as('status');
            cy.wrap(res.headers).as('headers');
            cy.wrap(res.body).as('body');
            cy.wrap(res.body.entry["uid"]).as('uid');
        }).as('req');
    }

    postCreateEntry(entry, body) {
        cy.api({
            method: 'POST',
            url: 'https://eu-api.contentstack.com/v3/content_types/'+entry+'/entries?locale=en-us',
            headers: {
                'api_key': Cypress.env('api_key'),
                'authtoken': Cypress.env('authtoken'),
                'Content-Type': 'application/json'
            },
            body: body
        }).then((res) => {
            cy.wrap(res.status).as('status');
            cy.wrap(res.headers).as('headers');
            cy.wrap(res.body).as('body');
            
            //var data = res.body.entry['uid']
            // write to file
            
        }).as('req');
    }


    postPublishUID(entry, uid) {
        cy.api({
            method: 'POST',
            url: 'https://eu-api.contentstack.com/v3/content_types/'+entry+'/entries/'+uid+'/publish',
            headers: {
                'api_key': Cypress.env('api_key'),
                'authtoken': Cypress.env('authtoken'),
                'Content-Type': 'application/json'
            },
            body: {
                "entry": {
                    "environments": ["preview","staging"],
                    "locales": ["en-us"]
                },
                "locale": "en-us",
                "version": 1,
                "scheduled_at": "2019-02-14T18:30:00.000Z"
            }
        }).then((res) => {
            cy.wrap(res.status).as('status');
            cy.wrap(res.headers).as('headers');
            cy.wrap(res.body).as('body');
        }).as('req');
    }

    postDeleteAnEntry(entry, uid) {
        cy.api({
            method: 'POST',
            url: 'https://eu-api.contentstack.com/v3/content_types/'+entry+'/entries/'+uid+'?locale=en-us&delete_all_localized=true',
            headers: {
                'api_key': Cypress.env('api_key'),
                'authtoken': Cypress.env('authtoken'),
                'Content-Type': 'application/json'
            }
        }).then((res) => {
            cy.wrap(res.status).as('status');
            cy.wrap(res.headers).as('headers');
            cy.wrap(res.body).as('body');
        }).as('req');
    }

    postRequest(requestMethod, requestUrl, queryBody) {
        cy.request({
            method: requestMethod,
            url: requestUrl,
            body: queryBody
        }).then((res) => {
            cy.wrap(res.status).as('status');
            cy.wrap(res.headers).as('headers');
            cy.wrap(res.body).as('body');
        }).as('req');
    }
}
