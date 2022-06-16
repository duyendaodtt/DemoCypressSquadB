Feature: Test API
  Scenario: Check scenario POST with body from external file
    When I make POST request to https://fakerestapi.azurewebsites.net/api/v1/Activities with body from postbody file
    Then Response code is 200
    And Response body should have "id" field with value as 0
    And Response body should have "completed" field with value as true
    And Response body should have "title" field with value as "test 1"

  Scenario Outline: Check status code
    When I make <requestMethod> request to https://fakerestapi.azurewebsites.net/api/v1/Activities with body from <fileName> file
    Then Response code is <statusCode>
    Examples: 
      | requestMethod | fileName | statusCode |
      | Post          | postbody |        201 |
      | Post          | postbody |        202 |
      | Post          | postbody |        200 |

