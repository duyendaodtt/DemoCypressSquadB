import constant from "../../fixtures/constant";
import locator from "../locator/home_page_locator";
import { apiPost } from "./apiSend";
import SharedObject from "./sharedObject";

class HomePage extends SharedObject {
    constructor() {
        super();
    }

    verify_element_nav() {
        // call api
        cy.fixture(constant.path_query_navigation).then((body) => {
            apiPost.graphqlPost(constant.method_post, constant.path, body)
        })
        cy.get('@req').then(dataNav => {
            cy.wrap(dataNav).then(item => {

                // verify navigation
                const { mainMenuItems } = item.data["navigation"]
                mainMenuItems.forEach( (element: any) => {
                    this.checkContainsText(element.title)
                });


            })
        })
        return this
    }
}

export default HomePage;