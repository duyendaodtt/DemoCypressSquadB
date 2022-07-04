// / <reference types = "Cypress"/>
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
                'api_key': 'bltaafcf579726913de',
                'authtoken': 'blt1dca3f5c679a66b6',
                'Content-Type': 'application/json'
            },
            body: jsonBody
        }).then((res) => {
            cy.wrap(res.status).as('status');
            cy.wrap(res.headers).as('headers');
            cy.wrap(res.body).as('body');
        }).as('req');
    }

    postPublishUID(entry, uid) {
        cy.api({
            method: 'POST',
            url: 'https://eu-api.contentstack.com/v3/content_types/'+entry+'/entries/'+uid+'/publish',
            headers: {
                'api_key': 'bltaafcf579726913de',
                'authtoken': 'blt1dca3f5c679a66b6',
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

    postRequest(requestMethod, requestUrl, queryBody) {
        cy.request({
            method: requestMethod,
            url: requestUrl,
            body: {
                query: queryBody
            }
        }).then((res) => {
            cy.wrap(res.status).as('status');
            cy.wrap(res.headers).as('headers');
            cy.wrap(res.body).as('body');
        }).as('req');
    }
}
