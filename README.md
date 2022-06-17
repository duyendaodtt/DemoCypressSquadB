# Demo
1. Run to install dependencies: 
    - npm i
    - npm i cypress-xpath
2. Execute test as cmd: npm run convert;npx cypress run;node cypress/cucumber-json/cucumber-html-report.js 
4. If want to add more feature, create on folder: cypress/integration/features
5. Then define the step definition at folder: cypress/integration/step_definitions
6. Store the examples data for Scenario at folder: cypress/examplesjson
# Gherkin Expressions 
1. Given I open {taxonomyPath} page
2. Then I see {string} is {string}
3. Then I see (.*) image
4. Then I see (.*) as (.*)
  

