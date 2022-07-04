Feature: Test query graphql

    Scenario Outline: E2E Check Article
        Given I send a <requestMethod> request to <url> with a body from <fileName>
        And I publish this article
        And I send a <requestMethod> request to <urlGrapthQL> with body from <fileQuery> file
        Then Response body should have "title" field with value as "Test 04-07 v1"

        Examples:
            | requestMethod | url                                                                           | fileName        | statusCode | urlGrapthQL | fileQuery        |
            | Post          | https://eu-api.contentstack.com/v3/content_types/article/entries?locale=en-us | ArticleBody.txt | 201        | /graphql    | queryArticle.txt |