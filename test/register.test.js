const register = require('../page/register.page')
const nav = require('../page/navbar.page');
const login = require('../page/login.page')
import { dashboardHeading } from '../page/main.page'

let newUsername // will be used in testing login for newly created user
let newPassword

describe('Register', () => {
    
    browser.url('/register')

    describe('Registers a New User', () => {
        it('Signs up user', () => {
            // fill in registration fields
            register.registerUniqueUser();
            // capture the new user values before completing registration
            newUsername = register.registerUsername.getValue();
            newPassword = register.registerPassword.getValue();
            // complete registration
            register.registerFormButton.click();
        });
        it('Confirms user is logged in, then logs out', () => {
            dashboardHeading.waitForDisplayed()
            // lack of sign up button demonstrates user is logged in
            expect(nav.registerButton).not.toBeVisible()
            // log user out
            nav.clickNavLogout();
        });
    });
    describe('Confirm existence of new user', () => {
        it('logs new user in', () => {     
            nav.clickNavLogin();
            login.login(newUsername, newPassword); // use captured user credentials to log in
            expect(dashboardHeading).toBeVisible()
        });
    });

});