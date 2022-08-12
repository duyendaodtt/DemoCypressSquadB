import queryPageContent from '../../PageObjects/query_pages';
import ApiShareObjects from '../../PageObjects/apiSharedObjects';

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
})

describe(`Smoke test`, () => {
    beforeEach(() => {
        
      })
    const queryGraphql = new queryPageContent()
    const apiExpected = new ApiShareObjects()
    
    describe("Query page content format", () => {
        it(`Given I send the graphql query for page content format `, () =>{
            queryGraphql.queryPageContentApi("PageContentFormat")
            cy.get('@resBody').then(resBody => {
                cy.task('setStatus', resBody.status);
                cy.task('setBody', resBody.body)
             });
        })
    
        it("Then I expected status code as 200", ()=>{
            apiExpected.verifyStatusCode(200 )
            // cy.task('getStatus').then((statusCode) => {
            //     apiExpected.verifyStatusCode(statusCode,200 )
                
            // })      
        })
        
        it("And the items list should be not null", () =>{
            cy.task('getBody').then((resBody) => {
                apiExpected.verifyItemsNotNull(resBody.data.page_content_format.items)
                
            })   
            
        })
    })


})
