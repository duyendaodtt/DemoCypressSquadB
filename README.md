# Demo
1. Run to install dependencies: 
    - npm i
    - npm i cypress-xpath
2. Execute test as cmd: npm run convert;npx cypress run;node cypress/cucumber-json/cucumber-html-report.js 
4. If want to add more feature, create on folder: cypress/integration/features
5. Then define the step definition at folder: cypress/integration/step_definitions
6. Store the examples data for Scenario at folder: *cypress/examplesjson*
# Gherkin Expressions 
1. Given I open {taxonomyPath} page
2. Then I see {string} is {string}
3. Then I see (.*) image
4. Then I see (.*) as (.*)
  
# To automaticaly insert examples talbe to .feature files

1. Store input json data in *./cypress/examplesjson/* folder
2. Make sure .json name has same value with folder in features folder
    For example:
 - You have *article.json* file and put it on /cypress/examplesjson/ fodler
 - You have feature files on *cypress/integration/features/article/* folder
 - Script will replace all "Examples:" with data that you put on *article.json* file
3. Run script by cmd: 
   node generatedata.js
4. All old examples table on your feature files will be deleted and replaced by new table from .json file 
