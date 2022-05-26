Feature: Quantum Article

  I want check Quantum Article site
  

  Scenario: Go to Quantum article site
    When I open "https://stage.quantumbusinessnews.com/deals-partnerships/quantum-company-delays-processor-plans-by-one-year" page
    Then I see header is "Quantum Company Delays Processor Plans By One Year"
    And I see summary is "Rigetti cites higher costs, supply chain challenges and lower than expected capital."
    And I see author name is "Berenice Baker"
    And I see published date is "May 20, 2022"
    And I see author image
    And I see feature image
    And I see keyword "quantum"
    And I see facebook share icon


  Scenario: Go to License Global article site
    When I open "https://stage.licenseglobal.com/entertainment/jazwares-makes-licensing-expo-debut-with-squishmallows-" page
    Then I see header is "Jazwares Makes Licensing Expo Debut with Squishmallows"
    And I see summary is "Plush brand drives new opportunities across multiple licensing categories."
    And I see author name is "License Global"
    And I see author image
    And I see feature image
    