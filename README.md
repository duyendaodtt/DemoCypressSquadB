# Demo
1. Run to install dependencies: npm i
2. Execute test as cmd: npx cypress run;node cypress/cucumber-json/cucumber-html-report.js 
4. If want to add more feature, create on folder: cypress/integration
5. Then define the step definition at folder: support/step_definitions
# Gherkin Expressions 
  Given I open {taxonomyPath} page
  
  Then I see {string} is {string}
  Then I see (.*) image
  Then I see (.*) as (.*)
  

