Feature: Test query graphql

    #Scenario: API E2E - Prepare Data
    #    Given I create keyword entry with a body from Keywords.txt
    #    And I publish this keyword
    #    And I create contributor entry with a body from contributor.txt
    #    And I publish this contributor
    #    And I create subbrand entry with a body from subbranch.txt
    #    And I publish this subbrand
    #   And I create content_format entry with a body from contentformat.txt
    #    And I publish this content_format

<<<<<<< HEAD
    #Scenario Outline: API E2E - Create Content Type Entries
    #    Given I update and create <entryName> entry with body from <entryJSON>
    #    And I publish this <entryName>

    #    Examples:
    #        | entryJSON    | entryName | 
    #        | _Article.txt | article   |
=======
    Scenario Outline: API E2E - Create Article
        Given I update and create <entryName> entry with body from <entryJSON>
        Examples:
            | entryJSON | entryName | Header 3 |
            | _Article.txt  | article  | Value 3  |
    Scenario: Query with uid
        Given 
>>>>>>> e53ec3a28ec866c7f2c3b86d62ecdc34910038ca
