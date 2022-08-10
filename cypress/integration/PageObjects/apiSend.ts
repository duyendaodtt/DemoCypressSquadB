// / <reference types = "Cypress"/>

// import { env } from "process";


// export const apiPost = new class APIPost {

//     graphqlPost(requestMethod: string, requestUrl: string, queryBody: any) {
//         cy.request({
//             method: requestMethod,
//             url: requestUrl,
//             body: {
//                 query: queryBody
//             }
//         }).then((res) => {
//             cy.wrap(res.status).as('status');
//             cy.wrap(res.headers).as('headers');
//             cy.wrap(res.body).as('body');
//         }).as('req');
//     }
// }

// / <reference types = "Cypress"/>

import { env } from "process";


export const apiPost = new class APIPost {

    updateBodyAndCreateEntry(entry: any, jsonBody: any) {
        var j1 = JSON.parse(jsonBody);
        const files = ['keywords.txt', 'contributor.txt', 'subbranch.txt', 'contentformat.txt']
        const contents = []

        cy.wrap(files).each((file) => {
            cy.readFile('./cypress/fixtures/inputAPI/uids/' + file).then((data) => {
                contents.push(data)
            })
        })
            .then(() => {
                // do whatever you want after all reading files is done

                j1.entry['keywords'][0]['uid'] = contents[0];
                j1.entry['contributor'][0]['uid'] = contents[1];
                j1.entry['subbrand'][0]['uid'] = contents[2];
                j1.entry['content_format'][0]['uid'] = contents[3];

                // updated uid for bodyJSON
                // create entry
                this.postCreateEntry(entry, j1)
            })
    }


    postMethod(requestMethod: string, requestUrl: string, jsonBody: any) {
        cy.request({
            method: requestMethod, url: requestUrl,
            // json: true,
            body: jsonBody
        }).then((res) => {
            cy.wrap(res.status).as('status');
            cy.wrap(res.headers).as('headers');
            cy.wrap(res.body).as('body');
        }).as('req');
    }

    postCreateEntry(entry: any, body: any) {
        cy.request({
            method: 'POST',
            url: 'https://eu-api.contentstack.com/v3/content_types/' + entry + '/entries?locale=en-us',
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

            // res.body.entry['uid']
            // write to file
            cy.log(entry)
            if (entry === 'keyword') {
                cy.writeFile('./cypress/fixtures/inputAPI/uids/keywords.txt', res.body.entry['uid'])
            }
            if (entry === 'contributor') {
                cy.writeFile('./cypress/fixtures/inputAPI/uids/contributor.txt', res.body.entry['uid'])
            }
            if (entry === 'subbrand') {
                cy.writeFile('./cypress/fixtures/inputAPI/uids/subbranch.txt', res.body.entry['uid'])
            }
            if (entry === 'content_format') {
                cy.writeFile('./cypress/fixtures/inputAPI/uids/contentformat.txt', res.body.entry['uid'])
            }

        }).as('req');
    }


    postPublishUID(entry: any, uid: any) {
        cy.request({
            method: 'POST',
            url: 'https://eu-api.contentstack.com/v3/content_types/' + entry + '/entries/' + uid + '/publish',
            headers: {
                'api_key': Cypress.env('api_key'),
                'authtoken': Cypress.env('authtoken'),
                'Content-Type': 'application/json'
            },
            body: {
                "entry": {
                    "environments": [
                        "preview", "staging"
                    ],
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

    postDeleteAnEntry(entry: any, uid: any) {
        cy.request({
            method: 'POST',
            url: 'https://eu-api.contentstack.com/v3/content_types/' + entry + '/entries/' + uid + '?locale=en-us&delete_all_localized=true',
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

    postRequest(requestMethod: string, requestUrl: string, queryBody: any) {
        cy.request({ method: requestMethod, url: requestUrl, body: queryBody }).then((res) => {
            cy.wrap(res.status).as('status');
            cy.wrap(res.headers).as('headers');
            cy.wrap(res.body).as('body');
        }).as('req');
    }

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

    postGetEntryByUID(entry: any, uid: string) {
        cy.request({
            method: 'Get',
            url: 'https://eu-api.contentstack.com/v3/content_types/' + entry + '/entries/' + uid,
            headers: {
                'api_key': Cypress.env('api_key'),
                'authtoken': Cypress.env('authtoken'),
                'Content-Type': 'application/json'
            }
        }).then((res) => {
            cy.wrap(res.status).as('CSstatus');
            cy.wrap(res.headers).as('CSheaders');
            cy.wrap(res.body).as('CSbody');
        }).as('req');
    }

    graphqlQuery(requestUrl, query, opName) {
        // cy.log(query);
        cy.request({
            method: 'POST',
            url: requestUrl,
            headers: {
                "content-type": "application/json; charset=utf-8"
            },
            body: { query }
        }).then((res) => {
            cy.wrap(res.status).as('graphstatus');
            cy.wrap(res.headers).as('graphheaders');
            cy.wrap(res.body).as('graphbody');
        }).as('graphreq');
    }
}
