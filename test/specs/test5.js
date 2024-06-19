import loginPage from '../pageobjects/login.page.js'

describe('Login functionaloty', () => {
    it('Password security', async () => {
        await loginPage.open()

        await loginPage.inputPassword.setValue("SuperSecretPassword!")
        
        const prop = await loginPage.inputPassword.getCSSProperty('-webkit-text-security')
        await expect(prop.value).toBe('disc')
    })
})