Feature: Test API
  Scenario Outline: Check scenario create article entry
    When I create new <contentType> entry with authtoken as <AuthToken> and api_key as <Api_Key> and body from <Body_Json>
    Examples:
        | contentType | AuthToken | Api_Key | Body_Json |
        | article  | blt370e8911b939523d  | bltbbbdd615c0ee9096 | entrybody |
        | article  | blt370e8911b939523d  | bltbbbdd615c0ee9096 | entryArticleFull |