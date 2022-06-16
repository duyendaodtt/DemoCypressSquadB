Feature: Test API
  Scenario: Check scenario GET
    When I make a GET request to https://fakerestapi.azurewebsites.net/api/v1/Activities
    Then Response code is 200

  Scenario: Check scenario POST with body
    When I make POST request to https://fakerestapi.azurewebsites.net/api/v1/Activities with body from postbody file
    Then Response code is 200

    Examples:
        | Header 1 | Header 2 | Header 3 |
        | Value 1  | Value 2  | Value 3  |