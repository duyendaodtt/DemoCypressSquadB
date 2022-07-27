Feature: Test query graphql

    Scenario Outline: STAN-688
    Given I make query to get <entryName> entry from <severUrl> that uid from <fileName>
    Then Response headers should have "" field
    Examples:
        | entryName | severUrl | fileName |
        | article  | https://content.staging.scm.informagt.com/v1/graphql?client_id=master  |  _article.txt  |