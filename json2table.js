const fs = require('fs');

// directory path
const dir = './Json/';

// list all files in the directory
fs.readdir(dir, (err, files) => {
    if (err) {
        throw err;
    }

    // files object contains all files names
    // log them on console
    files.forEach(file => {
        console.log('\n\n\tGenerate table for: ' +file);
        let json = require(dir +file);
        console.log(arrayToCSV(json));
    });
});

//let json = require('./Json/2.json');
//console.log(arrayToCSV(json));


function arrayToCSV (data) {
    csv = data.map(row => Object.values(row));
    csv.unshift(Object.keys(data[0]));
    return `| ${csv.join(' |\n| ').replace(/,/g, ' | ')} |`;

  }

  async function getFiles(dir) {
    const subdirs = await readdir(dir);
    const files = await Promise.all(subdirs.map(async (subdir) => {
      const res = resolve(dir, subdir);
      return (await stat(res)).isDirectory() ? getFiles(res) : res;
    }));
    return files.reduce((a, f) => a.concat(f), []);
  }