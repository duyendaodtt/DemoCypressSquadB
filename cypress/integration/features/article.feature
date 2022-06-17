Feature: Test
  this is description

  Scenario Outline: Check scenario with outline: full case
    Given I open "<actualPath>" page
    Then I see Author Name as <authorName>
    Examples:
| actualPath | authorName | publishDate | 
| /applications/how-financial-services-can-benefit-from-quantum-computing-solutions | Berenice Baker | May 9, 2022 |
| /applications/quantum-summit-2022-where-is-quantum-computing-now- | Berenice Baker | June 15, 2022 |
| /applications/test-article-1 | Scarlett Evans | May 24, 2022 |
| /applications/test-article-2 | Scarlett Evans | May 24, 2022 |

| actualPath | authorName | publishDate | 
| /applications/how-financial-services-can-benefit-from-quantum-computing-solutions | Berenice Baker | May 9, 2022 |
| /applications/quantum-summit-2022-where-is-quantum-computing-now- | Berenice Baker | June 15, 2022 |
| /applications/test-article-1 | Scarlett Evans | May 24, 2022 |

| actualPath | authorName | publishDate | 
| /applications/how-financial-services-can-benefit-from-quantum-computing-solutions | Berenice Baker | May 9, 2022 |
| /applications/quantum-summit-2022-where-is-quantum-computing-now- | Berenice Baker | June 15, 2022 |
| /applications/test-article-1 | Scarlett Evans | May 24, 2022 |

  Scenario Outline: Check scenario with outline: publish date
    Given I open "<actualPath>" page
    Then I see publish date as <publishDate>
    Examples:
| actualPath | authorName | publishDate | 
| /applications/how-financial-services-can-benefit-from-quantum-computing-solutions | Berenice Baker | May 9, 2022 |
| /applications/quantum-summit-2022-where-is-quantum-computing-now- | Berenice Baker | June 15, 2022 |
| /applications/test-article-1 | Scarlett Evans | May 24, 2022 |
| /applications/test-article-2 | Scarlett Evans | May 24, 2022 |

| actualPath | authorName | publishDate | 
| /applications/how-financial-services-can-benefit-from-quantum-computing-solutions | Berenice Baker | May 9, 2022 |
| /applications/quantum-summit-2022-where-is-quantum-computing-now- | Berenice Baker | June 15, 2022 |
| /applications/test-article-1 | Scarlett Evans | May 24, 2022 |
 