Feature: Test query graphql

    Scenario: API E2E - Prepare Data
        Given I create keyword entry with a body from Keywords.txt
        And I publish this keyword
        And I create contributor entry with a body from contributor.txt
        And I publish this contributor
