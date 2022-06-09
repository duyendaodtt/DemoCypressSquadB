Feature: Test
  Scenario: Go to Quantum article site
<<<<<<< HEAD
    Given I open "/applications/how-financial-services-can-benefit-from-quantum-computing-solutions" page
    Then I see author image
    And I see "header" is "How Financial Services Can Benefit from Quantum Computing Solutions"
    And I see "summary" is "Q&A with Multiverse Computing CTO Sam Mugel"

  Scenario Outline: Check scenario with outline
    Given I open <actualPath> page
    Then I see Author Name as <authorName>
    And I see publish date as <publishDate>
    Examples:
        | actualPath | authorName | publishDate |
        | "/applications/how-financial-services-can-benefit-from-quantum-computing-solutions"  | Berenice Baker | May 9, 2022  |
=======
    When I open "https://stage.quantumbusinessnews.com/applications/how-financial-services-can-benefit-from-quantum-computing-solutions" page
    Then I see header is "How Financial Services Can Benefit from Quantum Computing Solutions"
>>>>>>> origin/ha
