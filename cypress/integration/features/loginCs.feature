Feature: Go to and interact with CS

  I want to login to CS and do more action: create, delete entry
  
  @focus
  Scenario Outline: Create new article
    Given I login to CS site successfully
    And I open content stack page
    When I go to Entries menu of Quantum CS 
    And I search for Article content type
    And I create new Article with headline as <headline>
    And I create new Article with Author as <author>
  Examples:
        |headline|author|publishedDate|taxonomyPrimary|body|
        |Test Article 1||Test Author|Category 1|body content 1|