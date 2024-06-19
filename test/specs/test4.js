import loginPage from '../pageobjects/login.page.js'

describe('Login functionaloty', () => {
    it('Unsuccessful login with empty fields', async () => {
        await loginPage.open()
        await loginPage.login('', '')

        await expect(browser).toHaveUrl('https://the-internet.herokuapp.com/login')

        await expect(loginPage.msgError).toBeExisting()
        console.log(await loginPage.msgError.getText())
        await expect(loginPage.msgError).toHaveText(expect.stringContaining('Your username is invalid!'))
    })
})