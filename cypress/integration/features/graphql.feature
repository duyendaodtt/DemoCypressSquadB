Feature: Test query graphql

    # Scenario Outline: API E2E - Prepare Data
    #     Given I create <entryName> entry with a body from <filename>
    #     And I publish this <entryName>
    #     Examples:
    #         | entryName      | filename          |
    #         | keyword        | keywords.txt      |
    #         | contributor    | contributor.txt   |
    #         | subbrand       | subbrand.txt      |
    #         | content_format | contentformat.txt |

    # Scenario Outline: API E2E - Create Content Type Entries
    #     Given I update and create <entryName> entry with body from <entryJSON>
    #     And I publish this <entryName>
    #     Examples:
    #         | entryJSON               | entryName                    |
    # | _Article.txt              | article                     |
    # | _Document.txt             | document                    |
    # | _BasicPage.txt            | basic_page                  |
    # | _Event.txt                | event                       |
    # | _Podcast.txt              | podcast                     |
    # | _Video.txt                | video                       |
    # | _Magazine.txt             | magazine                    |
    # | _ExternalLink.txt         | external_link               |
    # | _TopicPrimary.txt         | topic_primary               |
    # | _Country.txt              | country                     |
    # | _SeriesTaxonomy.txt       | series                      |
    # | _ModuleContentSpotlight   | module_content_spotlight    |
    # | _ModuleExternalLink.txt   | module_external_links       |
    # | _ModuleFeatured.txt       | module_featured             |
    # | _ModuleMagazinePromo.txt  | module_magazine_promo       |
    # | _ModuleNewletterPromo.txt | module_newsletter_promo_cta |
    # | _Sponsor.txt              | sponsor                     |
    # | _Homepage.txt             | home_page                   |
    #| _ModuleEventPromo.txt     | event_promo                 |
    #| _ModuleContentCards.txt | module_flexible_content_list |


    # Scenario Outline: API E2E Query Entry with API
    #     Given I make query to get <entryName> entry from <severUrl> that uid from <fileName>
    #     And I make query to get <entryName> entry from ContentStack with uid from <fileName>
    #     Examples:
    #         | entryName | severUrl                                                              | fileName     |
    #         | article   | https://content.staging.scm.informagt.com/v1/graphql?client_id=master | _article.txt |

    # Scenario Outline: API E2E - Delete entries
    #     Given I delete <entryName> entry with uid from <fileName>
    #     Examples:
    #         | fileName                        | entryName                   |
    #         | Article.txt                     | article                     |
    #         | Document.txt                    | document                    |
    #         | basic_page.txt                  | basic_page                  |
    #         | Event.txt                       | event                       |
    #         | Podcast.txt                     | podcast                     |
    #         | Video.txt                       | video                       |
    #         | keyword.txt                     | keyword                     |
    #         | contributor.txt                 | contributor                 |
    #         | subbrand.txt                    | subbrand                    |
    #         | content_format.txt              | content_format              |
    #         | magazine.txt                    | magazine                    |
    #         | external_link.txt               | external_link               |
    #         | topic_primary.txt               | topic_primary               |
    #         | country.txt                     | country                     |
    #         | series.txt                      | series                      |
    #         | module_content_spotlight.txt    | module_content_spotlight    |
    #         | module_external_links.txt       | module_external_links       |
    #         | module_featured.txt             | module_featured             |
    #         | module_magazine_promo.txt       | module_magazine_promo       |
    #         | module_newsletter_promo_cta.txt | module_newsletter_promo_cta |
    #         | sponsor.txt                     | sponsor                     |
    # |home_page.txt|home_page|
    #| event_promo.txt     | event_promo                 |
    #| module_flexible_content_list.txt     | module_flexible_content_list |

    # Scenario Outline: API E2E - Prepare Data Topics
    #     Given I create <entry>
    #     Examples:
    #         | entry              |
    #         | _TopicTertiary.txt |