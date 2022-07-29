import { Given } from "cypress-cucumber-preprocessor/steps";
import { apiPost } from "../PageObjects/apiSend"

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
  cy.get('@body').then((responseBody) => {
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

Given(/^I make query to get (.*) entry from (.*) that uid from (.*)$/, (entryName, urlServerGraphql, path) => {
  var newpath = '/inputAPI/uids/' + path
  cy.fixture(newpath).then((data) => {

    var queryString = `
    query all${entryName}{
      all_${entryName} (
        where: {uid:"${data}"}
      ) {
        items {
          title
          uid
          summary
          url
        }
      }
    }
    `;
    var body = queryString.toString();
    apiPost.graphqlQuery(urlServerGraphql, body, 'all_'+entryName)

  })
})

Given(/^I make query to get (.*) entry from ContentStack with uid from (.*)$/, (entryName, filename) => {
  var newpath = '/inputAPI/uids/' + filename
  cy.fixture(newpath).then((body) => {
    apiPost.postGetEntryByUID(entryName, body);
  })
})

Given(/^I delete (.*) entry with uid from (.*)$/, (entryName, filename) => {
  var newpath = '/inputAPI/uids/' + filename
  cy.fixture(newpath).then((body) => {
      apiPost.deleteEntry(entryName, body);

  })
})