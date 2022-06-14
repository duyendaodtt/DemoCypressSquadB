import './commands'

Cypress.Commands.add('api_request', (method,requestURL) => {
    cy.request({
      method: method,
      url: requestURL
    })
})

Cypress.Commands.add('api_request_body', (method, requestURL, body_api) => {
  
    cy.request({
      method: method,
      url: requestURL,
      body: body_api
    })
})