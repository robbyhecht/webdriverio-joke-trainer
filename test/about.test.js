const main = require('../page/main.page');
const about = require('../page/about.page')
const login = require('../page/login.page')
const nav = require('../page/navbar.page')
import { username, password } from '../td'

describe('About Column Appearance and Functionality', () => {

    browser.url('/')

    describe('Logged Out', () => {

        // test headings and urls when logged out

        it('Cruise column link', () => {
            about.cruiseLink()
            main.checkPageHeading("Cruise the Jokes")
        });
        it('Favorites column link and button', () => {
            about.favoritesLink()
            main.checkPageHeading("Save Your Favorite Jokes")
            about.aboutButtonClick()
            main.checkUrl('https://www.joketrainer.com/login?next=/favorites')
        });
        it('Trainer column link and button', () => {
            nav.clickNavHome()
            about.trainerLink()
            main.checkPageHeading("Train Your Brain")
            about.aboutButtonClick()
            main.checkUrl('https://www.joketrainer.com/login?next=/favorites/trainer')
        });
        it('Add Joke column link and button', () => {
            nav.clickNavHome()
            about.addJokeLink()
            main.checkPageHeading("Add Your Own Jokes")
            about.aboutButtonClick()
            main.checkUrl('https://www.joketrainer.com/login?next=/add')
        });
    });
    
    describe('Logged In', () => {

        // test urls when logged in

        it('Favorites button (includes login)', () => {
            nav.logButton.click()
            login.login(username, password) // log in with credentials from td file
            about.favoritesLink()
            about.aboutButtonClick()
            main.checkUrl('https://www.joketrainer.com/favorites')
        });
        it('Trainer button', () => {
            about.trainerLink()
            about.aboutButtonClick()
            main.checkUrl('https://www.joketrainer.com/favorites/trainer')
        });
        it('Add Joke Button', () => {
            about.addJokeLink()
            about.aboutButtonClick()
            main.checkUrl('https://www.joketrainer.com/add')
            nav.logButton.click() // log out
        });
    });

});