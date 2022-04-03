const reporter=require('cucumber-html-reporter')

const reporterOptions = {
    theme : 'bootstrap',
    jsonFile: 'cucumber_report.json',
    output: 'reports/cucumber_report.html',
    reportSuiteAsScenario:true,
    scenarioTimestamp: true,
    launchReport: false,
    metadata:{
        "App version":"1.0.0",
        "Environment":"stage",
        "Browser": "chrome",
        "Platform":"WINDOWS 10"
    }
}

reporter.generate(reporterOptions)