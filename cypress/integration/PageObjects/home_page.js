import constant from "../../fixtures/constant";
import locator from "../locator/home_page_locator";
import { apiPost } from "./apiSend";
import SharedObject from "./sharedObject";

class HomePage extends SharedObject {
    constructor(){
        super();
    }

    verify_element_footer( ) {
        // call api
        var newpath = '/inputAPI/queryFooter.text'
        cy.fixture(newpath).then((body) => {
            apiPost.graphqlPost(constant.method_post, constant.path , body)
            cy.log(res)
        })
        return this
    }
}

export default HomePage;