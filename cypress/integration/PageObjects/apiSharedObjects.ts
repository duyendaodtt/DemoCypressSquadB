class ApiShareObjects {
    verifyStatusCode(expectedStatusCode: number) {
        cy.then(
            // cy.get('@status').should('eq', expectedStatusCode)
            expect('@status').equal(expectedStatusCode)
        )
    }

    verifyItemsNotNull(itemPath: string) {
        cy.then(
            expect(itemPath.length).not.equal(0)
        )
    }

}

export default ApiShareObjects