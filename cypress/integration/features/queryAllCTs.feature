Feature: Query all content types
    Description: Smoke test for query all content types
    Scenario Outline: Graphql query for <contentType>
        Given I make graphql query from /v1/graphql?client_id=master with body as file <queryFile>
        Then Response code is 200
        And Response body of "<contentQuery>" should have total items is not null

        Examples:
            | contentType     | queryFile               | contentQuery        |
            | Article         | queryArticle.txt        | all_article         |
            | Document        | queryDocument.txt       | all_document        |
            | Webinar         | queryWebinar.txt        | all_webinar         |
            | Slideshow       | querySlideshow.txt      | all_slideshow       |
            | Video           | queryVideo.txt          | all_video           |
            | BasicPage       | queryBasicPage.txt      | page_basic          |
            | Podcast         | queryPodcast.txt        | all_podcast         |
            | Event           | queryEvent.txt          | all_event           |
            | Topic Primary   | queryTopicPrimary.txt   | all_topic_primary   |
            | Topic Secondary | queryTopicSecondary.txt | all_topic_secondary |
            | Keyword         | queryKeyword.txt        | all_keyword         |
            | Content Format  | queryContentFormat.txt  | all_content_format  |
            | Country         | queryCountry.txt        | all_country         |
            | Contributor     | queryContributor.txt    | all_contributor     |
            | Sponsor         | querySponsor.txt        | all_sponsor         |
            | Subbrand        | querySubbrand.txt       | all_subbrand        |
