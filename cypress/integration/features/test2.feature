Feature: Scenario only
    Scenario: Scenario 1
        Given I open "/applications/how-financial-services-can-benefit-from-quantum-computing-solutions" page
        Then I see "summary" is "Q&A with Multiverse Computing CTO Sam Mugel"

    Scenario: Scenario 2
        Given I open "/applications/how-financial-services-can-benefit-from-quantum-computing-solutions" page
        Then I see author image
        And I see "header" is "How Financial Services Can Benefit from Quantum Computing Solutions"
        And I see "summary" is "Q&A with Multiverse Computing CTO Sam Mugel"
    
    Scenario: Scenario 3
        Given I open "/applications/how-financial-services-can-benefit-from-quantum-computing-solutions" page
        Then I see "summary" is "Q&A with Multiverse Computing CTO Sam Mugel"