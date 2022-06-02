import cypress from "cypress";
import { Then } from "cypress-cucumber-preprocessor/steps";
import { fixtures } from "../../support/fixtures";
import Article from "../PageObjects/article";
import SharedObject from "../PageObjects/sharedObject";

const article = new Article();
const utils = new SharedObject();

before(()=> {
  cy.fixture(fixtures.Article).then(eles =>{
     this.eles = eles
  })
  cy.fixture("responseApi/article.json").then(resp =>{
    this.resp = resp
  })
})

Then(`I see {string} is {string}`, (fieldName, contentValue)=>{
    if(fieldName.toLowerCase().includes("header")){
      return utils.checkLocatorContains(this.eles.articleTitle, contentValue);
    }
    if(fieldName.toLowerCase().includes("summary")){
      return utils.checkLocatorContains(this.eles.summaryLocator,contentValue);
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
    console.error(field + " is not defined on Then phase");
  }
})

Then(/^I see (.*) as (.*)$/, (field, expectedResult) =>{
  if(field.toLowerCase().includes("author",)){
    return article.checkArticleAuthor(this.eles.authorLocator,expectedResult);
  }
  if(field.toLowerCase().includes("publish")){
    return article.checkArticlePublishedDate(this.eles.publishDateLocator,expectedResult);
  }
  if(field.toLowerCase().includes("keyword")){
    return utils.checkXpathContains(this.eles.keywordLocator, expectedResult);
  }
  else{
    console.error(field + " is not defined on Then phase");
  }
})


Then(`I see facebook share icon`, () =>{
  return utils.checkShareFacebook();
})