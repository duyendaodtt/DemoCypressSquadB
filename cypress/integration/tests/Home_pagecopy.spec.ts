import constant from "../../fixtures/constant";
import { apiPost } from "../PageObjects/apiSend";
import HomePage from "../PageObjects/home_page"
let data = []
Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
})

describe("Given I updated data navigation on Content Stack", () => {
    const home_page = new HomePage()

    before(() => {
        let body = require("../../fixtures/inputAPI/navigation_main.json")
        // api update entry navigation
        apiPost.updateEntry(constant.entry_navigation_main, constant.navigation_uid, body)
        // api publish entry
        apiPost.postPublishUID(constant.entry_navigation_main, constant.navigation_uid)
        // call api get data navigation
        cy.fixture(constant.path_query_navigation).then((body) => {
            apiPost.graphqlPost(constant.method_post, constant.path, body)
        }).then(() => {
            cy.get('@req').then(dataNav => {
                cy.wrap(dataNav).then(item => {
                    const { sideNavSections } = item.data["navigation"]
                   data = [...sideNavSections]
                })
            })
        })

    })

    beforeEach(() => {
        cy.visit("/", { timeout: 20000 });
    });

    describe("WHEN I go to the navigation on homepage", () => {
        it("THEN Verify elements all of Nav sub menu", () => {
            home_page.Verify_elements_of_Nav_sub_menu(data)
        })

        it("AND Check click ability items in Related Topics of Navigation bar", () => {
            home_page.Verify_click_ability_items_of_Nav_sub_menu(data)
        })
    })
})
