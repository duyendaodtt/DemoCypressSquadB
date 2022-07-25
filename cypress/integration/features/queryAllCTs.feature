Feature: Query all content types
    Description: Smoke test for query all content types
    Scenario Outline: Graphql query for <contentType>
        Given I make graphql query from <url> with body as file <queryFile>
        Then Response code is 200
        And Response body of "<contentQuery>" should have total items is not null

        Examples:
            | contentType | url                                                                   | queryFile         | contentQuery |
            | article     | https://content.preview.scm.informagt.com/v1/graphql?client_id=master | queryArticle.txt  | all_article  |
            | document    | https://content.preview.scm.informagt.com/v1/graphql?client_id=master | queryDocument.txt | all_document |
            | webinar     | https://content.preview.scm.informagt.com/v1/graphql?client_id=master | queryWebinar.txt  | all_webinar  |