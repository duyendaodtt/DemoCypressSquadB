Feature: Post CS
    Scenario Outline: E2E Check Article 1
        Given I send a <requestMethod> request to <url> with a body from <fileName>
        And I publish this article
        Then Response body should have "notice" field with value as "The requested action has been performed."
        Examples:
            | requestMethod | url                                                                           | fileName        | statusCode | urlGrapthQL | fileQuery        |
            | Post          | https://eu-api.contentstack.com/v3/content_types/article/entries?locale=en-us | ArticleBody.txt | 201        | /graphql    | queryArticle.txt |