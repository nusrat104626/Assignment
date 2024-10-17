describe('Automated Login', () => {
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
        //await browser.pause(10000);
        await browser.pause(2000);
        


/*click the menubar
const menuBar = await $('#react-burger-menu-btn');
await menuBar.waitForDisplayed();
await menuBar.click();
await browser.pause(3000);
 //click the first item*/
 const productElement = await $("//div[@data-test='inventory-item-name']");
 await productElement.waitForDisplayed();
 await productElement.click();
 await browser.pause(2000);
 
 //Add to cart
 const AddToCart = await $("//button[text()='Add to cart']");
 await AddToCart.waitForDisplayed();
 await AddToCart.click();
 await browser.pause(2000);
 //Bck to products #back-to-products
 const BackToProducts = await $('#back-to-products');
 await BackToProducts.waitForDisplayed();
 await BackToProducts.click();
 await browser.pause(2000);


//Add the second element
//click the first item*/
const productElement1 = await $("//div[text()='Sauce Labs Bolt T-Shirt']");
await productElement1.waitForDisplayed();
await productElement1.click();
await browser.pause(2000);

//Add to cart
const AddToCart1 = await $("//button[text()='Add to cart']");
await AddToCart1.waitForDisplayed();
await AddToCart1.click();
await browser.pause(2000);
//Bck to products #back-to-products

const BackToProducts1 = await $("//button[@id='back-to-products' and @data-test='back-to-products']");
 await BackToProducts1.waitForDisplayed();
 await BackToProducts1.click();
 await browser.pause(2000);
 //Add the second element
//click the first item*/
const productElement2 = await $("//div[text()='Sauce Labs Fleece Jacket']");
await productElement2.waitForDisplayed();
await productElement2.click();
await browser.pause(2000);

//Add to cart
const AddToCart2 = await $("//button[text()='Add to cart']");
await AddToCart2.waitForDisplayed();
await AddToCart2.click();
await browser.pause(2000);
//Bck to products #back-to-products

const BackToProducts2 = await $("//button[@id='back-to-products' and @data-test='back-to-products']");
 await BackToProducts2.waitForDisplayed();
 await BackToProducts2.click();
 await browser.pause(2000);
 //click tne cart
 const YourCart = await $('.shopping_cart_link');
 await YourCart.waitForDisplayed();
 await YourCart.click();
 await browser.pause(2000);
 //click the checkout
 const CheckOut = await $('#checkout');
 await CheckOut.waitForDisplayed();
 await CheckOut.click();
 await browser.pause(2000);
  // Wait for the FirstName input and fill it
  const FirstName = await $('#first-name');
  await FirstName.waitForDisplayed();
  await FirstName.setValue('Nusrat');
  await browser.pause(2000);
  
 

  // Wait for the LastName input and fill it
  const LastName = await $('#last-name');
  await LastName.waitForDisplayed();
  await LastName.setValue('Jahan');
  await browser.pause(2000);
  //wait for the postal  code input
  const PostalCode = await $('#postal-code');
  await PostalCode.waitForDisplayed();
  await PostalCode.setValue('4212');
  await browser.pause(2000);

   //click the continue


const Continue = await $('#continue');
 await Continue.waitForDisplayed();
 await Continue.click();
 await browser.pause(2000);


 //click the Finish
 const Finish = await $('#finish');
 await Finish.waitForDisplayed();
 await Finish.click();
 await browser.pause(2000);


 const BackToProducts3= await $("//button[@id='back-to-products' and @data-test='back-to-products']");
 await BackToProducts3.waitForDisplayed();
 await BackToProducts3.click();
 await browser.pause(2000);

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
        expect(await loginPage.isDisplayed()).toBe





    });
    
    
});
