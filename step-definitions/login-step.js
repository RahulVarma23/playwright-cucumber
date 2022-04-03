const{Given,When,Then,defineStep} = require('@cucumber/cucumber')
var {setDefaultTimeout} = require('@cucumber/cucumber'); 
setDefaultTimeout(30 * 1000);

const {LoginPage} = require('../page-objects/login-page')

const loginPage = new LoginPage()

Given('I open the application',async()=>{
   await loginPage.navigateToLoginScreen()
})

When('I click on form authentication',async()=>{
    await loginPage.clickOnFormAuthentication()
})

defineStep('I fill the login form using {string} and {string}',async(username,password)=>{
    await loginPage.fillTheLoginForm(username,password)
})

defineStep('I logout from application',async()=>{
    await loginPage.logoutFromApp()
})

Then('I should be navigated to home page',async()=>{
    await loginPage.verifyIfLoginIsSuccessfull()
})