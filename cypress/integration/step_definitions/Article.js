import cypress from "cypress";
import { Then } from "cypress-cucumber-preprocessor/steps";
import Article from "../PageObjects/article";
import SharedObject from "../PageObjects/sharedObject";

const article = new Article();
const utils = new SharedObject();

Then(`I see header is {string}`, (title) =>{
    return article.checkArticleHeader(title);
})


Then(`I see summary is {string}`, (title) =>{
  return article.checkArticleSummary(title);
})

Then(`I see author name is {string}`, (title) =>{
  return article.checkArticleAuthor(title);
})

Then(`I see published date is {string}`, (title) =>{
  return article.checkArticlePublishedDate(title);
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