Feature: Test query graphql

    Scenario Outline: Check for query each item
        Given I send a <requestMethod> request to <url> with body from <fileName> file
        Then Response code is <statusCode>
        Examples:
            | requestMethod | url      | fileName    | statusCode |
            | Post          | /graphql | queryAuthor.txt | 200        |
            | Post          | /graphql | queryTitle.txt | 200        |

    Scenario Outline: query with contributor uid as <uid>
        Given I make a <requestMethod> request to <url> with contributor has uid as <uid>
        Then Response code is <statusCode>
        Examples:
            | requestMethod | url      | uid  | statusCode |
            | Post          | /graphql | 1234 | 200        |
            | Post          | /graphql | 4444 | 200        |