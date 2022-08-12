Feature: Query single content types
    Description: Smoke test for query content types that return single item

    @smokeTest
    Scenario Outline: Query for single item of <contentType>
        Given I make graphql query from /v1/graphql?client_id=master with body as file <queryFile>
        Then Response code is 200
        And Response body of "<contentQuery>" should have total items is 1

        Examples:
            | contentType        | queryFile                 | contentQuery        |
            | Footer             | queryFooter.txt           | footer              |
            | Navigation         | queryNavigation.txt       | navigation          |
            | Setting - Article  | querySettingArticle.txt   | settings_article    |
            | Setting ELN Config | querySettingElnConfig.txt | settings_eln_config |
            | Setting Search     | querySettingSearch.txt    | settings_search     |
            | Setting Site       | querySettingSite.txt      | settings_site       |


