Feature: Check required fields
    Description: Check require fields 
     @smokeTest
    Scenario Outline: Check required fields not null
        Given I make graphql query from /v1/graphql?client_id=master with body as file <queryFile>
        Then Required fields for response of <contentQuery> should not empty
    Examples:
        | contentType                | queryFile                     | contentQuery                 |
        | Article                    | queryArticle.txt              | all_article                  |