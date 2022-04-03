const common = `
   --require set-up/assertions.js
   --require set-up/hooks.js
   --require step-definitions/**/*.js
   
   `

module.exports = {
    default: `${common}features/**/*.feature -f json:cucumber_report.json --publish-quiet`
}