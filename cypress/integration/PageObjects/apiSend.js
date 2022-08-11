// / <reference types = "Cypress"/>

import { log } from "console";
import { env } from "process";


export const apiPost = new class APIPost {

    updateBodyAndCreateEntry(entry, jsonBody) {
        var j1 = JSON.parse(jsonBody);
        const files = ['keyword.txt', 'contributor.txt', 'subbrand.txt', 'content_format.txt']
        const contents = []


        cy.wrap(files).each((file) => {
            cy.readFile('./cypress/fixtures/inputAPI/uids/' + file).then((data) => {
                contents.push(data)
            })
        })
            .then(() => {
                // do whatever you want after all reading files is done
                // update keyword
                if (j1.entry['keywords'] !== undefined) {
                    if (j1.entry['keywords'].length === 0) {
                        j1.entry['keywords'].push(contents[0])
                        cy.log('Pushed content to Keywords')
                    }
                    else {
                        j1.entry['keywords'][0]['uid'] = contents[0];
                        cy.log('Updated keywords uid')
                    }
                }
                //update contributor
                if (j1.entry['contributor'] !== undefined) {
                    if (j1.entry['contributor'].length === 0) {
                        j1.entry['contributor'].push(contents[1])
                        cy.log('Pushed content to contributor')
                    }
                    else {
                        j1.entry['contributor'][0]['uid'] = contents[1];
                        cy.log('Updated contributor uid')
                    }
                }
                //update subbrand
                if (j1.entry['subbrand'] !== undefined) {
                    if (j1.entry['subbrand'].length === 0) {
                        j1.entry['subbrand'].push(contents[2])
                        cy.log('Pushed content to subbrand')
                    }
                    else {
                        j1.entry['subbrand'][0]['uid'] = contents[2];
                        cy.log('Updated subbrand uid')
                    }
                }
                //update content format
                if (j1.entry['content_format'] !== undefined) {
                    if (j1.entry['content_format'].length === 0) {
                        j1.entry['content_format'].push(contents[3])
                        cy.log('Pushed content to subbrand')
                    }
                    else {
                        j1.entry['content_format'][0]['uid'] = contents[3];
                        cy.log('Updated content_format uid')
                    }
                }
                // updated uid for bodyJSON
                // create entry
                this.postCreateEntry(entry, j1)
            })
    }


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
            cy.writeFile('./cypress/fixtures/inputAPI/uids/'+entry+'.txt', res.body.entry['uid'])
        }).as('req');
    }


    postPublishUID(entry, uid) {
        cy.api({
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

    postDeleteAnEntry(entry, uid) {
        cy.api({
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

    postRequest(requestMethod, requestUrl, queryBody) {
        cy.request({ method: requestMethod, url: requestUrl, body: queryBody }).then((res) => {
            cy.wrap(res.status).as('status');
            cy.wrap(res.headers).as('headers');
            cy.wrap(res.body).as('body');
        }).as('req');
    }

    postGetEntryByUID(entry, uid) {
        cy.api({
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

    deleteEntry(entryName, uid) {
        cy.api({
            method: 'DELETE',
            url: 'https://eu-api.contentstack.com/v3/content_types/' + entryName + '/entries/' + uid,
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

    graphqlQuery(requestUrl, query, opName) {
        cy.log(query);
        cy.request({
            method: 'POST',
            url: requestUrl,
            body: { query }
        }).then((res) => {
            cy.wrap(res.status).as('graphstatus');
            cy.wrap(res.headers).as('graphheaders');
            cy.wrap(res.body).as('graphbody');
        }).as('graphreq');
    }

    createTopics(jsonBody) {
        var jtertiary = ""
        var jsecondary = ""
        var jprimary = ""
        

        this.postCreateEntry('topic_tertiary', )
        const contents = []
        cy.readFile('./cypress/fixtures/inputAPI/uids/' + file).then((data) => {
        contents.push(data)
        })
    }
}
