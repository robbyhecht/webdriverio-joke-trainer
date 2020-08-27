const login = require('../page/login.page')
const categories = require('../page/categories.page')
const main = require('../page/main.page');
const button = require('../page/buttons.page')
const nav = require('../page/navbar.page')
import { jokeTextQA } from '../page/card.page'
import { username, password } from '../td'

describe('Categories Column and Page', () => {

    browser.url('/')

    describe('Column', () => {
        it('Links to expected category page', () => {
            // Verified by comparing category selected to resulting page heading
            categories.categoriesHeading.waitForDisplayed()
            const catName = categories.firstCategory.getText() // capture first category name
            categories.selectCategory() // click first cateogry
            categories.categoriesPageHeadingContainer.waitForDisplayed()
            main.checkPageHeading(catName) // check category heading against captured name
        });
    });
    describe('Page', () => {
        describe('Logged Out', () => {
            it('Displays at least one joke card', () => {
                expect(jokeTextQA).toBeVisible()
            });
            it('Displays correct flip button when logged out', () => {
                expect(button.flipButtonLoggedOut).toBeVisible()
            }); 
        });
        describe('Logged In', () => {
            it('Displays paired flip button when logged in', () => {
                nav.clickNavLogin()
                login.login(username, password); // log in using td credentials
                categories.selectCategory();
                categories.categoriesPageHeadingContainer.waitForDisplayed();
                expect(button.flipButtonLoggedIn).toBeVisible();
            });
            it('Displays add to favorites button', () => {
                expect(button.addToFavoritesButton).toBeVisible();
            });
            it('Links to user-created jokes page', () => {
                categories.categoriesHeading.waitForDisplayed()
                categories.selectMyJokes()
                main.checkPageHeading('My Jokes')
            });
        });
    });
});