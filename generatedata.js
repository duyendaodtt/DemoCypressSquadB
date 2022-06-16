const fs = require('fs');

// directory path
const dir = './cypress/examplesjson/';
const des = './cypress/integration/features/';

// list all files in the directory
fs.readdir(dir, (err, files) => {
    if (err) {
        throw err;
    }

    files.forEach(file => {
        console.log('\n\tGenerate table for: ' + file);
        // read json data
        let json = require(dir + file);
        let convert = ConvertToExampleTable(json);
        
        desFile = des + file.replace('.json', '.feature');

        fs.readFile(desFile, 'utf8', function (err, data) {
            if (err) {
                return console.log(err);
            }
            var result = data.replace(/Examples:/g, 'Examples:\r\n' + convert);

            fs.writeFile(desFile, result, 'utf8', function (err) {
                if (err) 
                    return console.log(err);
                
            });
        });
        console.log('\n\n');
    });
});


// Generate Table
function ConvertToExampleTable(objArray) {
  let rows = typeof objArray !== "object" ? JSON.parse(objArray) : objArray;
    let  header = "";
    Object.keys(rows[0]).map(pr => (header += pr + " | "));

    let str = "";
    rows.forEach(row => {
        let line = "";
        let columns =
            typeof row !== "object" ? JSON.parse(row) : Object.values(row);
        columns.forEach(column => {
            if (line !== "") {
                line += " | ";
            }
            if (typeof column === "object") {
                line += JSON.stringify(column);
            }  else {
                line += column;
            }
        });
        str += '| ' + line + " |\r\n";
    });
    return '| ' + header + "\r\n" + str;
}