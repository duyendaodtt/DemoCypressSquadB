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
})


Then(`I see header is {string}`, (txt) =>{
 return article.checkArticleHeader(this.eles.articleTitle, txt);
})


Then(`I see summary is {string}`, (txt) =>{
  return article.checkArticleSummary(this.eles.summaryLocator,txt);
})

Then(`I see author name is {string}`, (txt) =>{
  return article.checkArticleAuthor(this.eles.authorLocator,txt);
})

Then(`I see published date is {string}`, (publishDate) =>{
  return article.checkArticlePublishedDate(this.eles.publishDateLocator,publishDate);
})


Then(`I see author image`, () =>{
  return article.checkArticleAuthorImage();
})

Then(`I see feature image`, () =>{
  return article.checkArticleFeatureImage();
})

Then(`I see keyword {string}`, (title) =>{
  return article.checkKeyword(title);
})

Then(`I see facebook share icon`, () =>{
  return utils.checkShareFacebook();
})