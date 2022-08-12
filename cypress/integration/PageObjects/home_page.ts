import constant from "../../fixtures/constant";
import locator from "../locator/home_page_locator";
import { apiPost } from "./apiSend";
import SharedObject from "./sharedObject";

class HomePage extends SharedObject {
    constructor() {
        super();
    }

    verify_elements_of_Nav_sub_menu() {
        cy.get('@req').then(dataNav => {
            cy.wrap(dataNav).then(item => {
                const { mainMenuItems } = item.data["navigation"]

                mainMenuItems.forEach((mainMenu: any, index: string) => {
                    this.verify_text_visible_by_element(locator.sub_menu_title(index+1), mainMenu.title)
                    this.click_element(locator.sub_menu_title(index+1))
                    this.verify_string_exits(locator.label_related_topics)
                    // sub menu
                    mainMenu.subMenu.forEach((subMenu_item: any, index: string) => {
                        this.verify_text_visible_by_element(locator.sub_menu_item_title(index+1), subMenu_item.title)
                        this.verify_link_by_element(locator.sub_menu_item_url(index+1), subMenu_item.url)
                    });
                    // all link
                    this.verify_text_visible_by_element(locator.all_link_title, mainMenu.seeAllLink)
                    this.verify_link_by_element(locator.all_link_url, mainMenu.seeAllLinkUrl)
                    this.click_element(locator.sub_menu_title(index+1))
                })
            })
        })
        return this
    }

    Verify_click_ability_items_of_Nav_sub_menu() {
        cy.get('@req').then(dataNav => {
            cy.wrap(dataNav).then(item => {
                const { mainMenuItems } = item.data["navigation"]
                this.click_element(locator.sub_menu_title('1'))
                this.click_element(locator.sub_menu_item_url('1'))
                this.verify_include_url(mainMenuItems[0].subMenu[0].url)
            })
        })
        return this
    }
}

export default HomePage;