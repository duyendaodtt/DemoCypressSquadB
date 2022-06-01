Feature: Test
  Scenario: Go to Quantum article site
    Given I open "/applications/how-financial-services-can-benefit-from-quantum-computing-solutions" page
    Then I see author image
    And I see header is "How Financial Services Can Benefit from Quantum Computing Solutions"
    And I see summary is "Q&A with Multiverse Computing CTO Sam Mugel"
  
  Scenario: Check author and publish date
    Given I open "/applications/how-financial-services-can-benefit-from-quantum-computing-solutions" page
    Then I see author name is "Berenice Baker"
    Then I see published date is "May 9, 2022"