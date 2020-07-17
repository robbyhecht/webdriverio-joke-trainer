const register = require('../page/register.page')
const nav = require('../page/navbar.page');
const login = require('../page/login.page')
import { dashboardHeading } from '../page/main.page'

let newUsername
let newPassword

describe('Register', () => {
    
    browser.url('/register')

    describe('Registers a New User', () => {
        it('Signs up user', () => {
            register.registerUniqueUser();
            newUsername = register.registerUsername.getValue();
            newPassword = register.registerPassword.getValue();
            register.registerFormButton.click();
        });
        it('Confirms user is logged in, then logs out', () => {
            dashboardHeading.waitForDisplayed()
            expect(nav.registerButton).not.toBeVisible()
            nav.clickNavLogout();
        });
    });
    describe('Confirm existence of new user', () => {
        it('logs new user in', () => {     
            nav.clickNavLogin();
            login.login(newUsername, newPassword);
            expect(dashboardHeading).toBeVisible()
        });
    });

});