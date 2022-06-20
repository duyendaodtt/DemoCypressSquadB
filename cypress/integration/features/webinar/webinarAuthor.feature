Feature: Check Webinar.Author
  this is description
  Scenario Outline: Check scenario with outline: author for <uid>
    Given I open "<actualPath>" page
    Then I see author as <authorName>
    Examples:
| uid | actualPath | authorName | publishDate | 
| test0005 | /applications/how-financial-services-can-benefit-from-quantum-computing-solutions | Berenice Baker | May 9, 2022 |
| test0006 | /applications/quantum-summit-2022-where-is-quantum-computing-now- | Berenice Baker | June 15, 2022 |
| test0007 | /applications/test-article-1 | Scarlett Evans | May 24, 2022 |

