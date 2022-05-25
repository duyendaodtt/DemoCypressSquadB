import cypress from "cypress";
import { Then } from "cypress-cucumber-preprocessor/steps";
import Article from "../PageObjects/article";

const article = new Article();

Then(`I see header is {string}`, (title) =>{
    return article.checkArticleHeader(title);
})


Then(`I see summary is {string}`, (title) =>{
  return article.checkArticleSummary(title);
})