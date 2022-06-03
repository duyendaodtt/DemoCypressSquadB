import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import {utils} from "../../support/CheckFunction"
import {article} from "../PageObjects/article"

const webElements = require("../../fixtures/webElements/articleElements.json");

Then(`I see {string} is {string}`, (fieldName, contentValue)=>{
    if(fieldName.toLowerCase().includes("header")){
      return utils.checkLocatorContains(webElements.articleTitle, contentValue);
    }
    if(fieldName.toLowerCase().includes("summary")){
      return utils.checkLocatorContains(webElements.summaryLocator,contentValue);
    }
    else{
      console.error(fieldName + " is not defined on Then phase");
    }
})

Then(/^I see (.*) image$/, (fieldName) =>{
    if(fieldName.toLowerCase().includes("author")){
      return article.checkArticleAuthorImage();
    }
    if(fieldName.toLowerCase().includes("feature")) {
      return article.checkArticleFeatureImage();
    }
    else {
      console.error(fieldName + " is not defined on Then phase");
    }
  })
  
  Then(/^I see (.*) as (.*)$/, (field, expectedResult) =>{
    if(field.toLowerCase().includes("author")){
      return article.checkArticleAuthor(webElements.authorLocator,expectedResult);
    }
    if(field.toLowerCase().includes("publish")){
      return article.checkArticlePublishedDate(webElements.publishDateLocator,expectedResult);
    }
    if(field.toLowerCase().includes("keyword")){
      return utils.checkXpathContains(webElements.keywordLocator, expectedResult);
    }
    else{
      console.error(field + " is not defined on Then phase");
    }
  })
