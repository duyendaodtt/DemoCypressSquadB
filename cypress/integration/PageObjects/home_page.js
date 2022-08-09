import constant from "../../fixtures/constant";
import locator from "../locator/home_page_locator";
import { apiPost } from "./apiSend";
import SharedObject from "./sharedObject";

class HomePage extends SharedObject {
    constructor() {
        super();
    }

    verify_element_footer() {
        // call api
        cy.fixture(constant.path_query_footer).then((body) => {
            apiPost.graphqlPost(constant.method_post, constant.path, body)
        })

        // verify footer
        cy.get('@req').then(dataFooter => {
            cy.wrap(dataFooter).then(item => {
                const { copyright, linkSections, logo } = item.data.footer
                this.checkContainsText(linkSections[0].title)
            })
        })
    }

    verify_element_nav() {
        // call api
        cy.fixture(constant.path_query_navigation).then((body) => {
            apiPost.graphqlPost(constant.method_post, constant.path, body)
        })

        // verify Nav
        cy.get('@req').then(dataNav => {
            cy.wrap(dataNav).then(item => {
                const { mainMenuItems } = item.data.navigation
                mainMenuItems.forEach(element => {
                    this.checkContainsText(element.title)
                });
            })
        })
        return this
    }
}

export default HomePage;