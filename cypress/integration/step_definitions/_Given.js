import { Given } from "cypress-cucumber-preprocessor/steps";
import {apiPost} from "../PageObjects/apiSend"

Given('I visit Quantum page', () => {
  cy.visit('https://www.quantumbusinessnews.com/')
})

Given(/^I send a (.*) request to (.*?) with body from (.*) file$/, (requestMethod, requestUrl, path) => {
  var newpath = '/inputAPI/' + path 
  cy.fixture(newpath).then((body) => {
    apiPost.postRequest(requestMethod, requestUrl, body)
  })
});



Given(/^I publish an (.*) with uid is (.*)$/, (entry, uid) => {
  apiPost.postPublishUID(entry, uid);
});

Given(/^I publish this (.*)$/, (entry) => {
  cy.get('@body').then((responseBody) =>{
    this.responseBody = responseBody
    apiPost.postPublishUID(entry, this.responseBody.entry.uid)
  })
});

Given(/^I update and create (.*) entry with body from (.*)$/, (entryName, path) => {
  var newpath = '/inputAPI/' + path 
  cy.fixture(newpath).then((body) => {
      apiPost.updateBodyAndCreateEntry(entryName, body)
  })
});

Given(/^I send a (.*) request to (.*?) with a body from (.*)$/, (requestMethod, requestUrl, path) => {
  var newpath = '/inputAPI/' + path 
  cy.fixture(newpath).then((body) => {
    apiPost.postRequestWithHeaders(requestMethod, requestUrl, body)
  })
});

Given(/^I create (.*?) entry with a body from (.*)$/, (requestMethod, path) => {
  var newpath = '/inputAPI/' + path 
  cy.fixture(newpath).then((body) => {
    apiPost.postCreateEntry(requestMethod, body)
  })
});

Given(/^I make a (.*) request to (.*?) with (.*?) has uid as (.*)$/, (requestMethod, requestUrl, fieldName, fieldValue) =>{
    var queryString= `
      query {
        all_article {
          (
            skip: 10
            limit: 10
            order_by: created_at_ASC
            where: {` + fieldName + `{
                  uid:"` + fieldValue + `"
                }
            `+ `}
          )
          items {
            title
            url
          }
        }
      }
    `;
      var body = queryString.toString();
    apiPost.postRequest(requestMethod, requestUrl, body)
})

Given(/^I make a query to (.*) with body from (.*)$/, (graphqlURL, filename) =>{
  var newpath = '/inputAPI/' + filename 
  cy.fixture(newpath).then((body) => {
    apiPost.postRequest("POST", graphqlURL, body.toString());
  })
})