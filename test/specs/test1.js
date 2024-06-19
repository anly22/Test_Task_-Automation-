import loginPage from '../pageobjects/login.page.js'
import securePage from '../pageobjects/secure.page.js'

describe('Login functionaloty', () => {
    it('Successful login with valid data', async () => {
        await loginPage.open()
        await loginPage.login('tomsmith', 'SuperSecretPassword!')

        await expect(browser).toHaveUrl('https://the-internet.herokuapp.com/secure')
    })

    it('Successful login message', async () => {
        await loginPage.open()
        await loginPage.login('tomsmith', 'SuperSecretPassword!')
        await expect(securePage.flashAlert).toBeExisting()
        console.log(await securePage.flashAlert.getText())
        await expect(securePage.flashAlert).toHaveText(expect.stringContaining('You logged into a secure area!'))
    })
})