const { expect, assert } = require('chai');

class LoginPage{

    async navigateToLoginScreen(){
        await page.goto("https://the-internet.herokuapp.com/")
    }

    async fillTheLoginForm(username, password){
        await page.fill('#username',username)
        await page.fill('#password',password)
        await page.click('.radius')
    }

    async clickOnFormAuthentication(){
        await page.click('[href="/login"]')
    }

    async verifyIfLoginIsSuccessfull(){
        const url = await page.url()
        expect(url).to.contain('/secure')
        await page.waitForSelector('#flash')  
    }

    async logoutFromApp(){
        await page.click('[href="/logout"]')
    }

}

module.exports = {LoginPage}