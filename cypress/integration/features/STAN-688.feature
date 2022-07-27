Feature: Test query graphql

    Scenario Outline: STAN-688 - Article
    Given I make query to https://content.preview.scm.informagt.com/2140/graphql?client_id=master with body from article.txt
    Then Response headers should have "<responseFiled>"
    And Response headers should not have "X-Powered-By"
    Examples:
        | responseFiled |
        | Cross-Origin-Embedder-Policy  |
        | Content-Security-Policy  |
        | Cross-Origin-Embedder-Policy  |
        | Cross-Origin-Opener-Policy  |
        | Cross-Origin-Resource-Policy  |
        | X-DNS-Prefetch-Control  |
        | Expect-CT  |
        | X-Frame-Options  |
        | Strict-Transport-Security  |
        | X-Download-Options |
        | X-Content-Type-Options  |
        | Origin-Agent-Cluster  |
        | X-Permitted-Cross-Domain-Policies |
        | Referrer-Policy |

    Scenario Outline: STAN-688 - Webinar
    Given I make query to https://content.preview.scm.informagt.com/2140/graphql?client_id=master with body from webinar.txt
    Then Response headers should have "<responseFiled>"
    And Response headers should not have "X-Powered-By"
    Examples:
        | responseFiled |
        | Cross-Origin-Embedder-Policy  |
        | Content-Security-Policy  |
        | Cross-Origin-Embedder-Policy  |
        | Cross-Origin-Opener-Policy  |
        | Cross-Origin-Resource-Policy  |
        | X-DNS-Prefetch-Control  |
        | Expect-CT  |
        | X-Frame-Options  |
        | Strict-Transport-Security  |
        | X-Download-Options |
        | X-Content-Type-Options  |
        | Origin-Agent-Cluster  |
        | X-Permitted-Cross-Domain-Policies |
        | Referrer-Policy |
    Scenario Outline: STAN-688 - document
    Given I make query to https://content.preview.scm.informagt.com/2140/graphql?client_id=master with body from document.txt
    Then Response headers should have "<responseFiled>"
    And Response headers should not have "X-Powered-By"
    Examples:
        | responseFiled |
        | Cross-Origin-Embedder-Policy  |
        | Content-Security-Policy  |
        | Cross-Origin-Embedder-Policy  |
        | Cross-Origin-Opener-Policy  |
        | Cross-Origin-Resource-Policy  |
        | X-DNS-Prefetch-Control  |
        | Expect-CT  |
        | X-Frame-Options  |
        | Strict-Transport-Security  |
        | X-Download-Options |
        | X-Content-Type-Options  |
        | Origin-Agent-Cluster  |
        | X-Permitted-Cross-Domain-Policies |
        | Referrer-Policy |

    Scenario Outline: STAN-688 - podcast
    Given I make query to https://content.preview.scm.informagt.com/2140/graphql?client_id=master with body from podcast.txt
    Then Response headers should have "<responseFiled>"
    And Response headers should not have "X-Powered-By"
    Examples:
        | responseFiled |
        | Cross-Origin-Embedder-Policy  |
        | Content-Security-Policy  |
        | Cross-Origin-Embedder-Policy  |
        | Cross-Origin-Opener-Policy  |
        | Cross-Origin-Resource-Policy  |
        | X-DNS-Prefetch-Control  |
        | Expect-CT  |
        | X-Frame-Options  |
        | Strict-Transport-Security  |
        | X-Download-Options |
        | X-Content-Type-Options  |
        | Origin-Agent-Cluster  |
        | X-Permitted-Cross-Domain-Policies |
        | Referrer-Policy |

Scenario Outline: STAN-688 - slideshow
    Given I make query to https://content.preview.scm.informagt.com/2140/graphql?client_id=master with body from slideshow.txt
    Then Response headers should have "<responseFiled>"
    And Response headers should not have "X-Powered-By"
    Examples:
        | responseFiled |
        | Cross-Origin-Embedder-Policy  |
        | Content-Security-Policy  |
        | Cross-Origin-Embedder-Policy  |
        | Cross-Origin-Opener-Policy  |
        | Cross-Origin-Resource-Policy  |
        | X-DNS-Prefetch-Control  |
        | Expect-CT  |
        | X-Frame-Options  |
        | Strict-Transport-Security  |
        | X-Download-Options |
        | X-Content-Type-Options  |
        | Origin-Agent-Cluster  |
        | X-Permitted-Cross-Domain-Policies |
        | Referrer-Policy |

Scenario Outline: STAN-688 - video
    Given I make query to https://content.preview.scm.informagt.com/2140/graphql?client_id=master with body from video.txt
    Then Response headers should have "<responseFiled>"
    And Response headers should not have "X-Powered-By"
    Examples:
        | responseFiled |
        | Cross-Origin-Embedder-Policy  |
        | Content-Security-Policy  |
        | Cross-Origin-Embedder-Policy  |
        | Cross-Origin-Opener-Policy  |
        | Cross-Origin-Resource-Policy  |
        | X-DNS-Prefetch-Control  |
        | Expect-CT  |
        | X-Frame-Options  |
        | Strict-Transport-Security  |
        | X-Download-Options |
        | X-Content-Type-Options  |
        | Origin-Agent-Cluster  |
        | X-Permitted-Cross-Domain-Policies |
        | Referrer-Policy |
