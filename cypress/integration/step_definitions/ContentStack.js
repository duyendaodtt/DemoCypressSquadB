import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import {loginCs} from "../PageObjects/CS/Login"
import {createEntry} from "../PageObjects/CS/createEntry"
import {createArticle} from "../PageObjects/CS/createArticle"
// const url = 'https://google.com'
Given('I open content stack page', () => {
  cy.visit('https://eu-app.contentstack.com')
})

Given('I login to CS site successfully', ()=>{
  loginCs.setLogin()
})

Then(/^I will see the dashboard$/, (  ) =>{
  cy.title().should('contain', 'Stacks | Contentstack')
} );

When(/^I go to (.*) menu of (.*) CS$/, (menuName, csName) =>{
    createEntry.GoToCS(csName);
    createEntry.clickEntryMenu(menuName);
} );

When(/^I search for (.*) content type$/, (contentTypeName ) =>{
   createEntry.searchContentType(contentTypeName);
   createEntry.clickContentType(contentTypeName);
   createEntry.clickAddNewEntry();
   createEntry.clickProceed();
} );


When(/^I create new Article with (.*) as (.*)$/, (fieldName, fieldValue) =>{
  if(fieldName.toLowerCase().trim()==='headline'){
    createArticle.createHeadline(fieldValue)
  };
  if(fieldName.toLowerCase().trim()==='author'){
    createArticle.createAuthor(fieldValue)
  };
  // if(fieldName.toLowerCase().trim()==='publishedDate'){
  //   createArticle.createAuthor(fieldValue)
  // };
} );



