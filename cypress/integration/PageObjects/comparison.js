const fs = require('fs');
var jsonDiff = require('json-diff')

export const Comparison = new class Comparison {
    compareTwoJsons(ObjA, ObjB){

        
        //j1 = fs.readFileSync(ObjA);
        //j2 = fs.readFileSync(ObjB);
        
        j1 = cy.task('readFileMaybe',ObjA);
        j2 = cy.task('readFileMaybe',Objb);


        json1 = JSON.parse(j1);
        json2 = JSON.parse(j2);
        
        //console.log(jsonDiff.diffString(json1,json2));
        
        let compare = jsonDiff.diffString(json1,json2).toString();
        if(compare.includes('{')){
            console.log('Not match');
            console.log(compare);
            return false;
        }
        else {
            console.log('Match');
            return true;
        }
    }
}