import HomePage from "../PageObjects/home_page"

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
})

describe("WHEN I go to the Homepage", () => {
    const home_page = new HomePage()

    beforeEach(() => {
        cy.visit("https://content.preview.scm.informagt.com/v1/graphql?client_id=master", {timeout: 80000 });
    });

    describe("AND I go to the footer", () => {
        it.only("THEN The footer should contains ...", () => {
            home_page.verify_element_footer()
        })
    })


})
