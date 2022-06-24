// Install lib 'npm i json-diff'


const fs = require('fs');
var jsonDiff = require('json-diff');
const { isJsxSpreadAttribute } = require('typescript');

j1 = fs.readFileSync('./cypress/fixtures/compare/input.json');
j2 = fs.readFileSync('./cypress/fixtures/compare/output.json');

json1 = JSON.parse(j1);
json2 = JSON.parse(j2);
console.log(json1[0].entry.title);

//console.log(jsonDiff.diffString(json1,json2));

let compare = jsonDiff.diffString(json1,json2).toString();
if(compare.includes('{')){
    console.log('Not match');
    console.log(compare);
}
else {
    console.log('Match');
}