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

Given(/^I make a (.*) request to (.*?) with (.*?) has uid as (.*)$/, (requestMethod, requestUrl, fieldName, fieldValue) =>{
    var body= `
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
    apiPost.postRequest(requestMethod, requestUrl, body)
})