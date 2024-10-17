/*import {LoginPage} from "./login.js";
const loginPage=new LoginPage();

describe("handle application login",async function(){
    it("enter username",async function(){
        browser.url('/');
        loginPage.enterUserName('tomsmith')
        assert.equal('tomsmith',loginPage.username.getValue());

    });


    it("enter password",async function(){
        loginPage.enterPassword('SuperSecretPassword')
        assert.equal('SuperSecretPassword',loginPage.password.getValue());

    });

   it("click login button",function(){
    loginPage.clickOnLogin();
      

    });

});
*/

describe('Automated Login', () => {
    it('should log in successfully', async () => {
        // Navigate to the login page
        await browser.url('/');
      
      

        // Wait for the email input and fill it
        const emailInput = await $('#user-name');
        await emailInput.waitForDisplayed();
        await emailInput.setValue('standard_user1');
        
       

        // Wait for the password input and fill it
        const passwordInput = await $('#password');
        await passwordInput.waitForDisplayed();
        await passwordInput.setValue('secret_sauce1');
        

        // Click the login button
        const loginButton = await $('#login-button');
        await loginButton.waitForDisplayed();
        await loginButton.click();
        await browser.pause(10000);


        const errorMessage = await $('//div[contains(text(), "Epic sadface: Username and password do not match any user in this service")]'); // Adjust the XPath as needed
        await browser.waitUntil(async () => {
            return await errorMessage.isDisplayed();
        }, { timeout: 10000, timeoutMsg: 'Expected error message not displayed after 10s' });

        // Verify the error message text
        const messageText = await errorMessage.getText();
        expect(messageText).toEqual('Epic sadface: Username and password do not match any user in this service'); // Adjust as needed
        




    });
    
    
});

