import HomePage from "../PageObjects/home_page"

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
})

describe("WHEN I go to the Homepage", () => {
    const home_page = new HomePage()

    beforeEach(() => {
        cy.visit("https://staging.scmdemo.informagt.com/", {timeout: 20000 });
    });

    describe("AND I go to the footer", () => {
        it.only("THEN The footer should contains ...", () => {
            home_page.verify_element_footer()
        })
    })

    describe("AND I go to the nav", () => {
        it.only("THEN The nav should contains ...", () => {
            home_page.verify_element_nav()
        })
    })


})
