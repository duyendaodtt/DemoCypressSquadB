Feature: Test query graphql

    Scenario Outline: Check for query each item
        Given I send a <requestMethod> request to <url> with body from <fileName> file
        Then Response code is <statusCode>
        Examples: 
            | requestMethod | url                           | fileName        | statusCode |
            | Post          | http://localhost:4001/graphql | queryAuthor.txt | 200        |
            | Post          | http://localhost:4001/graphql | queryTitle.txt  | 200        |