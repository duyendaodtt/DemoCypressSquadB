Feature: Test API
  Scenario: Check scenario GET
    When I make a "GET" request to "https://fakerestapi.azurewebsites.net/api/v1/Activities"
    Then Response code is 200

  Scenario: Check scenario POST with body
    When I make a "POST" request to "https://fakerestapi.azurewebsites.net/api/v1/Activities" with a body
      """
      {
        "id": 0,
        "title": "string",
        "dueDate": "2022-06-14T04:54:47.884Z",
        "completed": true
      }
      """
    Then Response code is 200