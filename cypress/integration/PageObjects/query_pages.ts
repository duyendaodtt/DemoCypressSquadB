import constant from "../../fixtures/constant";
import queryApi from "../../fixtures/queryAPi";
import { apiPost } from "./apiSend";
class queryPageContent extends queryApi {
    constructor() {
        super();
    }
    //query graphql
    queryPageContentApi(pageContentName) {
        var pageContentPath = `/inputAPI/${pageContentName}.txt`
        cy.fixture(pageContentPath).then((bodyQuery) =>{
            apiPost.graphqlPost(constant.method_post, constant.path, bodyQuery)
        })
    }
    

}
export default queryPageContent;