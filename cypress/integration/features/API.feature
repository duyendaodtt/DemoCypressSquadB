Feature: Test API
  Scenario: Check scenario GET
    When I make a GET request to https://fakerestapi.azurewebsites.net/api/v1/Activities
    Then Response code is 200

  Scenario Outline: Check status code
    When I make <requestMethod> request to https://fakerestapi.azurewebsites.net/api/v1/Activities with body from <fileName> file
    Then Response code is <statusCode>
    Examples:
        | requestMethod | fileName | statusCode |
        | Post  | postbody  | 201  |
        | Post  | postbody  | 202  |
        | Post  | postbody  | 200  |