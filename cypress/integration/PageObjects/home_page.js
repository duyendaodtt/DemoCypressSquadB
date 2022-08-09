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
        var newpath = '/inputAPI/queryFooter.text'
        cy.fixture(newpath).then((body) => {
            apiPost.graphqlPost(constant.method_post, constant.path, body)
        })

        // verify footer
        cy.get('@res').then(dataFooter => {
            cy.wrap(dataFooter).then(item => {
                const { copyright, linkSections, logo } = item.data.footer
                this.checkContainsText(linkSections[0].title)
            })
        })
    }

    verify_element_nav() {
        // call api
        var newpath = '/inputAPI/queryMainNav.text'
        cy.fixture(newpath).then((body) => {
            apiPost.graphqlPost(constant.method_post, constant.path, body)
        })

        // verify Nav
        cy.get('@res').then(dataNav => {
            cy.wrap(dataNav).then(item => {
                const { copyright, linkSections, logo } = item.data.Nav
                this.checkContainsText(linkSections[0].title)
            })
        })
        return this
    }
}

export default HomePage;