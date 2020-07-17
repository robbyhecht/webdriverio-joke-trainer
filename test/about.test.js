const main = require('../page/main.page');
const about = require('../page/about.page')
const login = require('../page/login.page')
const nav = require('../page/navbar.page')
import { username, password } from '../td'

describe('About Column Appearance and Functionality', () => {

    browser.url('/')

    describe('Logged Out', () => {
        it('Cruise column link', () => {
            about.cruiseLink()
            const heading = main.mainHeading.getText()
            assert.equal(heading, "Cruise the Jokes")
        });
        it('Favorites column link', () => {
            about.favoritesLink()
            const heading = main.mainHeading.getText()
            assert.equal(heading, "Save Your Favorite Jokes")
        });
        it('Favorites button', () => {
            about.aboutButtonClick()
            const url = browser.getUrl()
            assert.equal(url, 'https://www.joketrainer.com/login?next=/favorites')
        });
        it('Trainer column link', () => {
            nav.clickNavHome()
            about.trainerLink()
            const heading = main.mainHeading.getText()
            assert.equal(heading, "Train Your Brain")
        });
        it('Trainer button', () => {
            about.aboutButtonClick()
            const url = browser.getUrl()
            assert.equal(url, 'https://www.joketrainer.com/login?next=/favorites/trainer')
        });
        it('Add Joke column link', () => {
            nav.clickNavHome()
            about.addJokeLink()
            const heading = main.mainHeading.getText()
            assert.equal(heading, "Add Your Own Jokes")
        });
        it('Add Joke button', () => {
            about.aboutButtonClick()
            const url = browser.getUrl()
            assert.equal(url, 'https://www.joketrainer.com/login?next=/add')
        });
    });
    describe('Logged In', () => {
        it('Favorites button', () => {
            nav.logButton.click()
            login.login(username, password)
            about.favoritesLink()
            about.aboutButtonClick()
            const url = browser.getUrl()
            assert.equal(url, 'https://www.joketrainer.com/favorites')
        });
        it('Trainer button', () => {
            about.trainerLink()
            about.aboutButtonClick()
            const url = browser.getUrl()
            assert.equal(url, 'https://www.joketrainer.com/favorites/trainer')
        });
        it('Add Joke Button', () => {
            about.addJokeLink()
            about.aboutButtonClick()
            const url = browser.getUrl()
            assert.equal(url, 'https://www.joketrainer.com/add')
            nav.logButton.click()
        });
    });

});