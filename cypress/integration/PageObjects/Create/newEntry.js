
/// <reference types = "Cypress"/>

export const newEntry = new class newEntry {

    createNewEntry(contentType, authtoken, api_key, body) {
        
        cy.request({
            method: 'POST',
            url: 'https://eu-api.contentstack.com/v3/content_types/'+contentType+'/entries?locale=en-us',
            headers: {
              'authtoken': authtoken,  
              'api_key'  : api_key,       
            },
            body: body
          });
    }
}