/// <reference types = "Cypress"/>
/// <reference types="cypress-xpath" />
export const loginCs = new class LoginToCs{
    // fillUsrName(username) {
    //     cy.get('#email').click().type(username)
    // }
    // fillPw(pw) {
    //     cy.get('#password').click().type(pw, { log: false })
    // }
    // submit() {
    //     cy.get('button[data-test-id="cs-button"]').click({ multiple: true })
    // }
    setLogin(token){
        cy.setCookie('authtoken', 'o+jwM5SmUqCJtAsnz+AZZeNrH3q81DZRp5iNpBieIzc=');
        cy.setCookie('__cs_user', 'blte8607d7da6f5b4cc');
        cy.setCookie('_hjSessionUser_1912433', 'eyJpZCI6IjhlMmJmYTJjLWVlNGMtNTk3MC04YWUwLTE1ZWQxY2IxOTEwOCIsImNyZWF0ZWQiOjE2NDk5Mjc0NzgxMjksImV4aXN0aW5nIjp0cnVlfQ==')
    }
   
} 