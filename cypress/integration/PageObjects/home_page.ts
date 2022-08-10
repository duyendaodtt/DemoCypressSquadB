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
                this.click_element(locator.icon_open_mega_menu)
                const { mainMenuItems } = item.data["navigation"]
                
                mainMenuItems.forEach( (element: any) => {
                    this.verify_string_exits(element.title)
                });

            })
        })
        return this
    }
}

export default HomePage;