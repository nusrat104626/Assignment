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

/*describe('Automated Login', () => {
    it('should log in successfully', async () => {
        // Navigate to the login page
        await browser.url('/');
      
      

        // Wait for the email input and fill it
        const emailInput = await $('#user-name');
        await emailInput.waitForDisplayed();
        await emailInput.setValue('standard_user');
        
       

        // Wait for the password input and fill it
        const passwordInput = await $('#password');
        await passwordInput.waitForDisplayed();
        await passwordInput.setValue('secret_sauce');
        

        // Click the login button
        const loginButton = await $('#login-button');
        await loginButton.waitForDisplayed();
        await loginButton.click();
        await browser.pause(10000);
        


//click the menubar
const menuBar = await $('#react-burger-menu-btn');
await menuBar.waitForDisplayed();
await menuBar.click();
await browser.pause(3000);


//click the logout button
const logoutButton = await $('#logout_sidebar_link'); 
        await logoutButton.click();
        await browser.pause(3000);
        //back to login page
        const loginPage = await $('#login-button'); // Adjust the selector as needed
        await loginPage.waitForDisplayed();
        expect(await loginPage.isDisplayed()).toBe(true);

    });
    
    
});

*/