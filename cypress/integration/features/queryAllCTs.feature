Feature: Query all content types
    Description: Smoke test for query all content types that returns multiple items
    @smokeTest
    Scenario Outline: Graphql query for <contentType>
        Given I make graphql query from /v1/graphql?client_id=master with body as file <queryFile>
        Then Response code is 200
        #And Response body of "<contentQuery>" should have total items is not null
    Examples:
        | contentType                | queryFile                     | contentQuery                 |
        | Article                    | queryArticle.txt              | all_article                  |
        | Document                   | queryDocument.txt             | all_document                 |
        | Webinar                    | queryWebinar.txt              | all_webinar                  |
        | Slideshow                  | querySlideshow.txt            | all_slideshow                |
        | Video                      | queryVideo.txt                | all_video                    |
        | Podcast                    | queryPodcast.txt              | all_podcast                  |
        | Event                      | queryEvent.txt                | all_event                    |
        | Topic Primary              | queryTopicPrimary.txt         | all_topic_primary            |
        | Topic Secondary            | queryTopicSecondary.txt       | all_topic_secondary          |
        | Keyword                    | queryKeyword.txt              | all_keyword                  |
        | Content Format             | queryContentFormat.txt        | all_content_format           |
        | Country                    | queryCountry.txt              | all_country                  |
        | Contributor                | queryContributor.txt          | all_contributor              |
        | Sponsor                    | querySponsor.txt              | all_sponsor                  |
        | Subbrand                   | querySubbrand.txt             | all_subbrand                 |
        | External Link              | queryExternalLink.txt         | all_external_link            |
        | ELN Newletters             | queryElnNewsletter.txt        | all_eln_newsletter           |
        | Module Event               | queryModuleEvent.txt          | all_modular_event_promo      |
        | Module External Link       | queryModulExternalLink.txt    | all_modular_external_link    |
        | Module ELN Newsleter Promo | queryModuleNewsleterPromo.txt | all_modular_newsletter_promo |
    
    # @smokeTest
    # Scenario Outline: Check required fields not null
    #     Given I make graphql query from /v1/graphql?client_id=master with body as file <queryFile>
    #     Then Required fields for response of <contentQuery> should not empty
    # Examples:
    #     | contentType                | queryFile                     | contentQuery                 |
    #     | Article                    | queryArticle.txt              | all_article                  |
    #     | Document                   | queryDocument.txt             | all_document                 |
    #     | Webinar                    | queryWebinar.txt              | all_webinar                  |
    #     | Slideshow                  | querySlideshow.txt            | all_slideshow                |
    #     | Video                      | queryVideo.txt                | all_video                    |
    #     | Podcast                    | queryPodcast.txt              | all_podcast                  |
    #     | Event                      | queryEvent.txt                | all_event                    |
    #     | Topic Primary              | queryTopicPrimary.txt         | all_topic_primary            |
    #     | Topic Secondary            | queryTopicSecondary.txt       | all_topic_secondary          |
    #     | Keyword                    | queryKeyword.txt              | all_keyword                  |
    #     | Content Format             | queryContentFormat.txt        | all_content_format           |
    #     | Country                    | queryCountry.txt              | all_country                  |
    #     | Contributor                | queryContributor.txt          | all_contributor              |
    #     | Sponsor                    | querySponsor.txt              | all_sponsor                  |
    #     | Subbrand                   | querySubbrand.txt             | all_subbrand                 |
    #     | External Link              | queryExternalLink.txt         | all_external_link            |
    #     | ELN Newletters             | queryElnNewsletter.txt        | all_eln_newsletter           |
    #     | Module Event               | queryModuleEvent.txt          | all_modular_event_promo      |
    #     | Module External Link       | queryModulExternalLink.txt    | all_modular_external_link    |
    #     | Module ELN Newsleter Promo | queryModuleNewsleterPromo.txt | all_modular_newsletter_promo |
    
