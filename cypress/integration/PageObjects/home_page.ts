import constant from "../../fixtures/constant";
import locator from "../locator/home_page_locator";
import { apiPost } from "./apiSend";
import SharedObject from "./sharedObject";

class HomePage extends SharedObject {
    constructor() {
        super();
    }

    Verify_related_topics_of_Nav_sub_menu(mainMenuItems: any) {
        mainMenuItems.length > 0 && mainMenuItems.forEach((mainMenu: any, index: number) => {
            console.log(mainMenu)
            this.verify_text_visible_by_element(locator.sub_menu_title(index+1), mainMenu.title)
            this.click_element(locator.sub_menu_title(index+1))
            this.verify_string_exits(locator.label_related_topics)
            // sub menu
            mainMenu.subMenu.forEach((subMenu_item: any, index: number) => {
                this.verify_text_visible_by_element(locator.sub_menu_item_title(index+1), subMenu_item.title)
                this.verify_link_by_element(locator.sub_menu_item_url(index+1), subMenu_item.url)
            });
            // all link
            this.verify_text_visible_by_element(locator.all_link_title, mainMenu.seeAllLink)
            this.verify_link_by_element(locator.all_link_url, mainMenu.seeAllLinkUrl)
            this.click_element(locator.sub_menu_title(index+1))
        })
        return this
    }

    Verify_click_ability_of_items_Nav_sub_menu(mainMenuItems: any) {
        mainMenuItems.length > 0 && mainMenuItems.forEach((mainMenu: any, index: number) => {
            this.click_element(locator.sub_menu_title(index+1))
            // sub menu
            mainMenu.subMenu.forEach((subMenu_item: any, index1: number) => {
                this.click_element(locator.sub_menu_item_url(index1+1))
                this.verify_include_url('https://www.' + subMenu_item.url.slice(8))
                cy.go('back')
                if(mainMenu.subMenu.length != index1+1) {
                    this.click_element(locator.sub_menu_title(index+1))
                }
            })
        })
        return this
    }
}

export default HomePage;