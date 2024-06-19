import loginPage from '../pageobjects/login.page.js'

describe('Unsuccessful login with invalid password', () => {
    it('Incorrect Password', async () =>{
        await loginPage.open()
        await loginPage.login('tomsmith', 'SomePassword')

        await expect(browser).toHaveUrl('https://the-internet.herokuapp.com/login')
        await expect(loginPage.msgError).toBeExisting()
    })

    it('Password input validation message', async () =>{
        await loginPage.open()
        await loginPage.login('tomsmith', 'SomePassword')

        await expect(browser).toHaveUrl('https://the-internet.herokuapp.com/login')
        await expect(loginPage.msgError).toBeExisting()
        console.log(await loginPage.msgError.getText())
        await expect(loginPage.msgError).toHaveText(expect.stringContaining('Your password is invalid!'))
    })
})