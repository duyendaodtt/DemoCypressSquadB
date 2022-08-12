class locator {
    static footer = "[data-module='footer']"
    static icon_open_mega_menu = "[aria-label='Open Mega menu']"
    static sub_menu_title(index: string) {
        return `[role='menu'] > div:nth-child(${index}) [role="menuitem"] span`
    }
    static sub_menu_item_title(index: string) {
        return `.block  [data-module="sub-menu"] ul li:nth-child(${index}) p`
    }

    static sub_menu_item_url(index: string) {
        return `.block  [data-module="sub-menu"] ul li:nth-child(${index}) a`
    }

    static all_link_title = '.block  [data-module="sub-menu"] > div:nth-child(2) > div:nth-child(2)  span'

    static all_link_url = '.block  [data-module="sub-menu"] > div:nth-child(2) > div:nth-child(2)  a'

    static label_related_topics = "Related Topics"
}

export default locator;