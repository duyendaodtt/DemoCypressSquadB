Feature: Test query graphql

    Scenario Outline: Article query: <fileName>
        Given I make a query to <url> with body from <fileName>
        Examples:
            | url     | fileName                           |
            | graphql | queryAllArticleTitle.txt |