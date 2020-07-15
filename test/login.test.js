const login = require("../page/login.page")
const nav = require("../page/navbar.page");
const td = require('../td')
import { username, password } from '../td'

describe('Login Page Appearance and Actions', () => {
    
    it('Should accept valid credentials', () => {
        browser.url('/login')
        login.login(username, password)
        assert.equal(nav.logButton.getText(), 'Log out')
        nav.logButton.click()
    });
    describe('Requires', () => {
        it('Should reject invalid username', () => {
            browser.url('/login')
            login.login('baduser', password)
            login.loginAlert.waitForDisplayed()
            assert.equal(login.loginAlert.getText(), 'That username or password is not registered. Please try again or create a new account.')
            assert.equal(nav.logButton.getText(), 'Log in')
        });
        it('Should reject invalid username', () => {
            browser.url('/login')
            login.login(td.username, 'badpass')
            login.loginAlert.waitForDisplayed()
            assert.equal(login.loginAlert.getText(), 'That username or password is not registered. Please try again or create a new account.')
            assert.equal(nav.logButton.getText(), 'Log in')
        });
    });
    describe('Fails For', () => {
        it('Missing username', () => {
            browser.url('/login')
            login.login('', password)
            const currentUrl = browser.getUrl()
            assert.equal(currentUrl, 'https://www.joketrainer.com/login')
            assert.equal(nav.logButton.getText(), 'Log in')
        });
        it('Missing password', () => {
            browser.url('/login')
            login.login(username, '')
            const currentUrl = browser.getUrl()
            assert.equal(currentUrl, 'https://www.joketrainer.com/login')
            assert.equal(nav.logButton.getText(), 'Log in')
        });
    });
    describe('Sign Up Button', () => {
        it('Sign up button takes user to register page', () => {
            login.clickRegisterButton()
            browser.pause(500)
            const currentUrl = browser.getUrl()
            assert.equal(currentUrl, 'https://www.joketrainer.com/register')
        });
    });

});