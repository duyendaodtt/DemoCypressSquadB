import cypress from "cypress"


class ApiShareObjects {
    verifyStatusCode(actualStatus: any, expectedStatusCode: number) {
        cy.then(
            // cy.get('@status').should('eq', expectedStatusCode)
            expect(actualStatus).to.eq(expectedStatusCode)
            // expect('@status').as
            
        )
    }

    verifyItemsNotNull(itemPath: string) {
        cy.then(
            expect(itemPath.length).not.equal(0)
        )
    }

}

export default ApiShareObjects