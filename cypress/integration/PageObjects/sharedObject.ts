/// <reference types = "Cypress"/>

class SharedObject {

  click_element(locator: string) {
    cy.get(locator, { timeout: 20000 }).click({ multiple: true, force: true });
  }

  click_element_by_string(string: string) {
    cy.contains(string, { timeout: 20000 }).click()
  }

  send_key_locator(locator: string, key: any) {
    cy.get(locator, { timeout: 20000 }).clear({ force: true }).type(key, { force: true });
  }

  verify_element_visible_by_locator(locator: string) {
    expect(cy.get(locator, { timeout: 120000 }).should("be.visible"));
  }

  hover_element(locator: string) {
    cy.get(locator, { timeout: 20000 }).trigger('mouseover')
  }

  verify_string_exits(string: string) {
    cy.contains(string, { timeout: 20000 }).scrollIntoView()
}

}

export default SharedObject