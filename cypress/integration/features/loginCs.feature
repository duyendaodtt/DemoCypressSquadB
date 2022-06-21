Feature: Go to and interact with CS

  I want to login to CS and do more action: create, delete entry
  
  @focus
  Scenario: Login to CS
    Given I login to CS site successfully
    And I open content stack page
    When I go to Entries menu of Quantum CS 
    And I search for Article content type
    And I create new Article with headline as Test article 1
