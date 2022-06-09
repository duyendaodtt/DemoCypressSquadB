import cypress from "cypress";
import { Then } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../PageObjects/homepage";
import { fixtures } from "../../support/fixtures";




  Then(`Locator {string} containts {string}`, (locator, txt) =>{
    return article.checkArticleHeader(locator, txt);
   })