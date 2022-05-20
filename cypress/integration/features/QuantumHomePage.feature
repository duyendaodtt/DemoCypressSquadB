Feature: Quantum homepage
  Scenario: visting the quantum homepage and see the title
    Given I visit Quantum page
    Then I see "Quantum" in the title
    And I should see the module Last News with title as "Last News"