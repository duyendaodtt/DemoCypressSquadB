import { describe } from "mocha";
import constant from "../../../fixtures/env/constant_value";
import locator from "../locator/home_page_locator";

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

describe("WHEN I go to the Homepage", () => {
    const home_page = new HomePage()

    beforeEach(() => {
        cy.visit(env['env']['base_url'], {timeout: 80000 });
    });

    describe("AND I go to the footer", () => {
        it.only("THEN The footer should contains ...", () => {
            home_page.verify_element_footer(email, constant.password)
        })
    })


})
