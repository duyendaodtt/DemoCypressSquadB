// / <reference types = "Cypress"/>

import { env } from "process";


export const apiPost = new class APIPost {

    graphqlPost(requestMethod: string, requestUrl: string, queryBody: any) {
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
