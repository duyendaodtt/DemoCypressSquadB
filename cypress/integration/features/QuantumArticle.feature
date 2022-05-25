Feature: Quantum Article

  I want check Quantum Article site
  
  @focus
  Scenario: Go to article site
    When I open "https://stage.quantumbusinessnews.com/deals-partnerships/quantum-company-delays-processor-plans-by-one-year" page
    Then I see header is "Test Article 1 - Edited Header"
    And I see summary is "123123123"