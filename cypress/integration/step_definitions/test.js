import cypress from "cypress";
import { Then } from "cypress-cucumber-preprocessor/steps";
import SharedObject from "../PageObjects/sharedObject";

const share = new SharedObject();

Then(`I see breadcrumbs {string}`, (txt) =>{
    return share.checkBreadcrumbsWithText(txt);
})

Then(`I see category {string}`, (txt) =>{
    return share.checkBody_Category();
})
