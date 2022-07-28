Feature: Query only Page content
    Description: Check query page content 
    @smokeTest
    Scenario Outline: Query page content of <contentType>
        Given I make graphql query from /v1/graphql?client_id=master with body as file <queryFile>
        Then Response code is 200
        And Response body of <contentQuery> should have 1 content
    Examples:
        | contentType        | queryFile                 | contentQuery        |
        | BasicPage          | queryBasicPage.txt        | page_basic          |