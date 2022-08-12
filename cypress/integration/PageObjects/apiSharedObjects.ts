import cypress from "cypress"


class ApiShareObjects {
    verifyStatusCode(expectedStatusCode: number) {
        cy.get('@status').then(statusCode =>{
            cy.wrap(statusCode).then(statusCode =>{
                expect(statusCode).to.eq(expectedStatusCode)
            })
            
        })
        return this 
    }

    verifyItemsNotNull(itemPath: string) {
        cy.then(
            cy.get('@body').then(body =>{
                expect(body.itemPath.length).not.equal(0)
            })
            
        )
        return this 
    }

}

export default ApiShareObjects