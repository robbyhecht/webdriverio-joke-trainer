const nav = require('../page/navbar.page')
const button = require('../page/buttons.page')
const card = require('../page/card.page');
const about = require('../page/about.page')
const categories = require('../page/categories.page')
const main = require('../page/main.page');
const login = require('../page/login.page');

describe('Dashboard Appearance and Actions', () => {

    browser.url('/')

    describe('Unrelated to Auth Status', () => {
        it('Confirm presence of correct navbar items', () => {
            nav.confirmNavItems()
        });
        it('Heading is dashboard welcome message', () => {
            main.mainHeading.waitForDisplayed()
            assert.equal(main.mainHeading.getText(), 'Welcome to Joke Trainer')
        });
        it('Page description is site explanation', () => {
            main.homepageDescription.waitForDisplayed()
            chaiExpect(main.homepageDescription.getText()).to.include('A curated library of jokes')
        });
        it('About Column', () => {
            about.aboutHeading.waitForDisplayed()
            assert.equal(about.aboutHeading.getText(), "ABOUT")
            expect(about.aboutContents).toExist()
        });
        it('Categories Column', () => {
            categories.categoriesHeading.waitForDisplayed()
            assert.equal(categories.categoriesHeading.getText(), "CATEGORIES")
            assert.equal(categories.firstCategory.getText(), "Animals")
        });
        it('Flip button reveals answer, reveals question', () => {
            // Establish that joke card displays question
            expect(card.flipped).not.toHaveClassContaining("flipit")
            expect(card.jokeTextQA).toBeVisible()
            // flip reveals answer
            button.flipCard()
            expect(card.flipped).toHaveClassContaining("flipit")
            expect(card.jokeTextQA).toBeVisible()
            // flip back shows question again
            button.flipCard()
            expect(card.flipped).not.toHaveClassContaining("flipit")
            expect(card.jokeTextQA).toBeVisible()
        });
    });
    describe('Specific to Logged Out', () => {
        it('Nav buttons', () => {
            nav.navbar.waitForDisplayed()
            expect(nav.registerButton).toBeVisible()
            assert.equal(nav.logButton.getText(), 'Log in')
        });
        it('Joke card buttons: should show only flip button with solo style', () => { 
            expect(button.flipButtonLoggedOut).toBeVisible()
        });
    });
    describe('Specific to Logged In', () => {
        it('Nav buttons while authenticated', () => {
            nav.logButton.click()
            login.login("webdriverio", "webdriverio")
            nav.navbar.waitForDisplayed()
            assert.equal(nav.logButton.getText(), 'Log out')
        });
        it('Includes user jokes category link', () => {
            expect(categories.myJokesCategory).toBeVisible()
        });
        it('Joke card buttons: should show paired flip and add to favorites buttons', () => {
            expect(button.flipButtonLoggedIn).toBeVisible()
            expect(button.addToFavoritesButton).toBeVisible()
        });
        it('Successfully log out', () => {
            nav.logButton.click()
            nav.navbar.waitForDisplayed()
            expect(nav.registerButton).toBeVisible()
            assert.equal(nav.logButton.getText(), 'Log in')
        });
    });
});