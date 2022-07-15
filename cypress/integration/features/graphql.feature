Feature: Test query graphql

   # Scenario: API E2E - Prepare Data
   #     Given I create keyword entry with a body from Keywords.txt
   #     And I publish this keyword
   #     And I create contributor entry with a body from contributor.txt
   #     And I publish this contributor
   #     And I create subbrand entry with a body from subbranch.txt
   #     And I publish this subbrand
   #     And I create content_format entry with a body from contentformat.txt
   #     And I publish this content_format

    Scenario Outline: API E2E - Create Article
        Given I update and create <entryName> entry with body from <entryJSON>

        Examples:
            | entryJSON | entryName | Header 3 |
            | _Article.txt  | article  | Value 3  |