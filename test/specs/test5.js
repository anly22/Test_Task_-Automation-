import loginPage from '../pageobjects/login.page.js'

describe('Login functionaloty', () => {
    it('Password security', async () => {
        await loginPage.open()

        await loginPage.inputPassword.setValue("SuperSecretPassword!")
        
        const attr = await loginPage.inputPassword.getAttribute('type')
        await expect(attr).toBe('password')
    })
})