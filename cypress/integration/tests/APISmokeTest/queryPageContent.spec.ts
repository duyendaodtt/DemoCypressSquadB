import queryPageContent from '../../PageObjects/query_pages';
import ApiShareObjects from '../../PageObjects/apiSharedObjects';

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
})

describe(`Smoke test`, () => {
    beforeEach(() => {
        console.log('Before each setting')

    });

    const queryGraphql = new queryPageContent()
    const apiExpected = new ApiShareObjects()
    
    describe("Query page content format", () => {
        it("Given I send the graphql query for page content format ", () => {
            queryGraphql.queryPageContentApi("PageContentFormat")
        })
        it("Then I expected status code as 200", ()=>{
            apiExpected.verifyStatusCode(200)
        })
        // it("And the items list should be not null", () =>{
        //     apiExpected.verifyItemsNotNull("")
        // })
    })


})
