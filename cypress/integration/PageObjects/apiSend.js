/// <reference types = "Cypress"/>
export const apiPost = new class APIPost {
    postMethod(requestMethod, requestUrl, jsonBody) {
        cy.api({
            method: requestMethod,
            url: requestUrl,
            // json: true,
            body: jsonBody
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
              query: queryBody,
            },
          }).then((res) => {
            cy.wrap(res.status).as('status');
            cy.wrap(res.headers).as('headers');
            cy.wrap(res.body).as('body');
        }).as('req');
    }
}
