import { Given } from "cypress-cucumber-preprocessor/steps";

Given('I visit Quantum page', () => {
  cy.visit('https://www.quantumbusinessnews.com/')
})

Given(/^I send a (.*) request to (.*?) with body from (.*) file$/, (requestMethod, requestUrl, path) => {
  var newpath = '/inputAPI/' + path
  cy.fixture(newpath).then((body) => {
    cy.request({
      method: requestMethod,
      url: requestUrl,
      body: {
        // operationName: 'IntrospectionQuery',
        query: body,
      },
    }).then((res) => {
      cy.wrap(res.status).as('status');
      cy.wrap(res.headers).as('headers');
      cy.wrap(res.body).as('body');
  }).as('req');
  })
});