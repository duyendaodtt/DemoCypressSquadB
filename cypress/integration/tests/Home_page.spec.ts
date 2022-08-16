import constant from "../../fixtures/constant";
import { apiPost } from "../PageObjects/apiSend";
import HomePage from "../PageObjects/home_page"
let data = require('../../fixtures/inputAPI/navigation_test.json')
Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
})

describe("Given I updated data navigation on Content Stack", () => {
    const home_page = new HomePage()

    // before(() => {
    //     let body = require("../../fixtures/inputAPI/navigation_main.json")
    //     // api update entry navigation
    //     apiPost.updateEntry(constant.entry_navigation_main, constant.navigation_uid, body)
    //     // api publish entry
    //     apiPost.postPublishUID(constant.entry_navigation_main, constant.navigation_uid)
    //     // call api get data navigation
    //     cy.fixture(constant.path_query_navigation).then((body) => {
    //         apiPost.graphqlPost(constant.method_post, constant.path, body)
    //     }).then(() => {
    //         cy.get('@req').then(dataNav => {
    //             cy.wrap(dataNav).then(item => {
    //                 const { mainMenuItems } = item.data["navigation"]
    //             //    data = [...mainMenuItems]
    //             })
    //         })
    //     })

    // })

    beforeEach(() => {
        cy.visit("/", { timeout: 20000 });
    });

    describe("When I open the navigation on Homepage", () => {
        it("Then Verify Related Topics section of Navigation sub menu", () => {
            home_page.Verify_related_topics_of_Nav_sub_menu(data.data.navigation.mainMenuItems)
        })

        it("AND Verify click ability of items in 'Related Topics' of Navigation bar", () => {
            home_page.Verify_click_ability_of_items_in_related_topics(data.data.navigation.mainMenuItems)
        })

        it("AND Verify Related In section of Navigation sub menu", () => {
            home_page.Verify_related_in_of_Nav_sub_menu(data.data.navigation.mainMenuItems)
        })

        it("AND Verify click ability of items in 'Related In' of Navigation bar", () => {
            home_page.Verify_click_ability_of_items_in_related_in(data.data.navigation.mainMenuItems)
        })
    })
})
