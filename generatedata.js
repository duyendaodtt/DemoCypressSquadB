const fs = require("fs");
var path = require('path');

// directory path
const dir = './cypress/examplesjson/';
const des = './cypress/integration/features/';

jsonFiles = fs.readdirSync(dir);
jsonFiles.forEach(file => { // read json file
    let json = require(dir + file);
    let convert = ConvertToExampleTable(json);
    desFolder = des + file.replace('.json', '');
    desFiles = fs.readdirSync(desFolder);
    desFiles.forEach(f => {
        file = desFolder + '/' + f
        InsertExampleTable(file, convert);
        console.log('Done ==> ' + file);
    })

})

// Insert example table
function InsertExampleTable(file, dataToInsert) { // console.log('Read ==> '+ file);
    var callback = function (err, data) {
        if (err) 
            return console.error(err);
        
        console.log(data);
    };
    var dt = fs.readFileSync(file, 'utf8', callback);
    result = dt.replace(/\|.*\|/g, ''); // remove old example table
    result = result.replace(/\n\s*\n/g, '\n'); // replace multiple line break to single
    result = result.replace(/Examples:/g, 'Examples:\r\n' + dataToInsert);

    fs.writeFileSync(file, result, callback);
    // console.log('Write ==> '+ file);
}

// Generate Table
function ConvertToExampleTable(objArray) {
    let rows = typeof objArray !== "object" ? JSON.parse(objArray) : objArray;
    let header = "";
    Object.keys(rows[0]).map(pr => (header += pr + " | "));

    let str = "";
    rows.forEach(row => {
        let line = "";
        let columns = typeof row !== "object" ? JSON.parse(row) : Object.values(row);
        columns.forEach(column => {
            if (line !== "") {
                line += " | ";
            }
            if (typeof column === "object") {
                line += JSON.stringify(column);
            } else {
                line += column;
            }
        });
        str += '| ' + line + " |\r\n";
    });
    return '| ' + header + "\r\n" + str;
}
