# Demo
1. Run to install dependencies: npm i ; npm i @cypress/request ; npm i cypress-xpath; npm install request --save, npm i soft-assert
2. Execute test as cmd: npx cypress run;node cypress/cucumber-json/cucumber-html-report.js 
4. If want to add more feature, create on folder: cypress/integration
5. Then define the step definition at folder: integration/step_definitions
#Gherkin script:
 1. When I make a (.*?) request to (.*)
 2. When I make (.*) request to (.*?) with body from (.*) file
 3. Then Response code is {int}
 4. Then Response header contains {string}
 5. Then Response body should have {string} field with value as {string}
 6. Then Response body should have {string} field with value as {int}
 7. Then Response body should have {string} field with value as {boolean}