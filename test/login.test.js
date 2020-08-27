const login = require("../page/login.page");
const nav = require("../page/navbar.page");
const main = require("../page/main.page");
import { username, password } from '../td'

describe('Login Page Appearance and Actions', () => {

    beforeEach(() => {
        browser.url('/login');
    });
    
    it('Should accept valid credentials', () => {
        // log in using td credentials
        login.login(username, password);
        // log out button existing demonstrates that user is logged in
        nav.checkLogButtonStatus('Log out');
        // log back out
        nav.logButton.click();
    });
    describe('Requires', () => {
        it('Should reject invalid username', () => {
            login.login('baduser', password);
            login.checkLoginAlert('That username or password is not registered. Please try again or create a new account.');
            nav.checkLogButtonStatus('Log in');
        });
        it('Should reject invalid username', () => {
            login.login(username, 'badpass');
            login.checkLoginAlert('That username or password is not registered. Please try again or create a new account.');
            nav.checkLogButtonStatus('Log in');
        });
    });
    describe('Fails For', () => {
        it('Missing username', () => {
            login.login('', password);
            main.checkUrl('https://www.joketrainer.com/login');
            nav.checkLogButtonStatus('Log in');
        });
        it('Missing password', () => {
            login.login(username, '');
            main.checkUrl('https://www.joketrainer.com/login');
            nav.checkLogButtonStatus('Log in');
        });
    });
    describe('Sign Up Button', () => {
        it('Sign up button takes user to register page', () => {
            login.clickRegisterButton();
            browser.pause(500);
            main.checkUrl('https://www.joketrainer.com/register');
        });
    });

});