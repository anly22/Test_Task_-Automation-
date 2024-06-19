import loginPage from '../pageobjects/login.page.js'

describe('Unsuccessful login with invalid username', () => {
    it('Incorrect username', async () => {
        await loginPage.open()
        await loginPage.login('Tom Smith', 'SuperSecretPassword!')

        await expect(browser).toHaveUrl('https://the-internet.herokuapp.com/login')

        await expect(loginPage.msgError).toBeExisting()
    })

    it('Cyrillic Username', async () => {
        await loginPage.open()
        await loginPage.login('Том Смит', 'SuperSecretPassword!')

        await expect(browser).toHaveUrl('https://the-internet.herokuapp.com/login')

        await expect(loginPage.msgError).toBeExisting()
    })

    it('Numbers Username', async () => {
        await loginPage.open()
        await loginPage.login('1111', 'SuperSecretPassword!')

        await expect(browser).toHaveUrl('https://the-internet.herokuapp.com/login')

        await expect(loginPage.msgError).toBeExisting()
    })

    it('Username input validation message', async () => {
        await loginPage.open()
        await loginPage.login('Tom Smith', 'SuperSecretPassword!')

        await expect(browser).toHaveUrl('https://the-internet.herokuapp.com/login')

        await expect(loginPage.msgError).toBeExisting()
        console.log(await loginPage.msgError.getText())
        await expect(loginPage.msgError).toHaveText(expect.stringContaining('Your username is invalid!'))
    })
})