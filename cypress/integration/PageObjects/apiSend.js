// / <reference types = "Cypress"/>

import {env} from "process";


export const apiPost = new class APIPost {

    updateBodyAndCreateEntry(entry, jsonBody) {
        var j1 = JSON.parse(jsonBody);
        const files = ['keywords.txt','contributor.txt','subbranch.txt','contentformat.txt']
        const content = []

        cy.wrap(files).each((file, i, array) => {
            return new Cypress.Promise((resolve) => {
                cy.readFile('./cypress/fixtures/inputAPI/uids/'+file).then((data) => {
                    content.push(data)
                }).then(res => {
                    console.log(res);
                })
            })
          })

        // Cypress.each(files, (file) => {
        //     cy.readFile('./cypress/fixtures/inputAPI/uids/'+file).then((data) => {
        //         content.push(data)
        //     })
        //   })
        //   .then(() => {
        //     // do whatever you want after all reading files is done
        //     cy.log(content)
        //   })

        // cy.readFile('./cypress/fixtures/inputAPI/uids/keywords.txt').then(obj => {
        //     j1.entry['keywords'][0]['uid'] = obj;
        //     cy.log(obj)
        // })
        // cy.readFile('./cypress/fixtures/inputAPI/uids/contributor.txt').then(obj => {
        //     j1.entry['contributor'][0]['uid'] = obj;
        //     cy.log(obj)
        // })
        // cy.readFile('./cypress/fixtures/inputAPI/uids/subbranch.txt').then(obj => {
        //     j1.entry['subbrand'][0]['uid'] = obj;
        //     cy.log(obj)
        // })
        // cy.readFile('./cypress/fixtures/inputAPI/uids/contentformat.txt').then(obj => {
        //     j1.entry['content_format'][0]['uid'] = obj;
        //     cy.log(obj)
        //     cy.log(j1.entry['content_format'][0]['uid'])
        // })
        // cy.log(j1.entry['content_format'][0]['uid'])

       
        
        // update body


        // create new entry
        // this.postCreateEntry(entry,obj)
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
        cy.request({method: requestMethod, url: requestUrl, body: queryBody}).then((res) => {
            cy.wrap(res.status).as('status');
            cy.wrap(res.headers).as('headers');
            cy.wrap(res.body).as('body');
        }).as('req');
    }
}
