Feature: Test query graphql

    Scenario: API E2E - Prepare Data
        Given I create keyword entry with a body from Keywords.txt
        And I publish this keyword
        And I create contributor entry with a body from contributor.txt
        And I publish this contributor
        And I create subbrand entry with a body from subbranch.txt
        And I publish this subbrand
        And I create content_format entry with a body from contentformat.txt
        And I publish this content_format

    Scenario Outline: API E2E - Create Content Type Entries
        Given I update and create <entryName> entry with body from <entryJSON>
        And I publish this <entryName>

        Examples:
            | entryJSON    | entryName | 
            | _Article.txt | article   | 
            | _Webinar.txt | webinar   | 