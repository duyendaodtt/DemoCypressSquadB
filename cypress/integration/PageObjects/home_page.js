import locator from "../locator/home_page_locator";
import { apiPost } from "./apiSend";
import SharedObject from "./sharedObject";

class HomePage extends SharedObject {
    constructor(){
        super();
    }

    verify_element_footer(path = "queryFooter.txt" ) {
        // call api
        var newpath = '/inputAPI/' + path
        cy.fixture(newpath).then((body) => {
          apiPost.graphqlPost("Post", urlServerGraphql = "/v1/graphql?client_id=master" , body)
        })
        // verify it on footer
    }
}

export default HomePage;