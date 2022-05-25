const report = require("multiple-cucumber-html-reporter");
var os = require('os');


var opsys = process.platform;
if (opsys == "darwin") {
    opsys = "MacOS";
} else if (opsys == "win32" || opsys == "win64") {
    opsys = "Windows";
} else if (opsys == "linux") {
    opsys = "Linux";
}

report.generate({
    jsonDir: "cypress/cucumber-json",  // ** Path of .json file **//
    reportPath: "./reports/cucumber-htmlreport.html",
    metadata: {
        browser: {
        name: "chrome",
        version: "",
        },
        device: "Local desktop",
        platform: {
            name: "",
            version: opsys+ " - Ver: "+os.release(),
        },
    },
});
