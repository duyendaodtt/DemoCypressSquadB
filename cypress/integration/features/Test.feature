Feature: Test with outline

  Scenario Outline: Check scenario with outline 
    Given I visit the page via "<actualPath>"
    Then I see Author Name as <authorName>
    And I see publish date as <publishDate>
    Examples:
        |actualPath|authorName|publishDate|
        |/applications/how-financial-services-can-benefit-from-quantum-computing-solutions|Berenice Baker|May 9, 2022|
        |/infrastructure/lg-joins-ibm-quantum-network|Chuck Martin|January 28, 2022|
