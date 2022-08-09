import locator from "../locator/home_page_locator";
import { apiPost } from "./apiSend";
import SharedObject from "./sharedObject";

class HomePage extends SharedObject {
    constructor(){
        super();
    }

    verify_element_footer( ) {
        let path = "queryFooter.text"
        // call api
        var newpath = '/inputAPI/' + path
        cy.fixture(newpath).then((body) => {
            cy.log( Cypress.env['base_url'])
            apiPost.graphqlPost("Post", "https://content.preview.scm.informagt.com/v1/graphql?client_id=master" + "/v1/graphql?client_id=master" , body)
        })
        return this
        // verify it on footer
    }
}

export default HomePage;