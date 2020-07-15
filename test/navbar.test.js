const nav = require('../page/navbar.page');
const login = require('../page/login.page');
import { username, password } from '../td'

describe('Navbar Features', () => {

    browser.url('/')

    describe('Navbar Functionality When Logged Out', () => {
        it('Logo navigates to dashboard', () => {
            nav.clickNavHome();
            const currentUrl = browser.getUrl();
            assert.equal(currentUrl, 'https://www.joketrainer.com/')
        });
        it('Favorites navigates to login with next set to favorites', () => {
            nav.clickNavFavorites();
            const currentUrl = browser.getUrl();
            assert.equal(currentUrl, 'https://www.joketrainer.com/login?next=/favorites');
        });
        it('Trainer navigates to login with next set to favorites/trainer', () => {
            nav.clickNavTrainer();
            const currentUrl = browser.getUrl();
            assert.equal(currentUrl, 'https://www.joketrainer.com/login?next=/favorites/trainer');
        });
        it('Add a Joke navigates to login with next set to add', () => {
            nav.clickNavAddJoke();
            const currentUrl = browser.getUrl();
            assert.equal(currentUrl, 'https://www.joketrainer.com/login?next=/add');
        });
        it('Performs a successful search', () => {
            nav.performSearch('thesaurus') // perform a search
            let searchHeading = $('.search-header')
            searchHeading.waitForDisplayed()
            assert.equal(searchHeading.getText(), 'Search Results') // correct page heading
            let resultsDescription = $('h6').getText()
            chaiExpect(resultsDescription).to.include('thesaurus') // description incl search term
            expect($('.card-text*=thesaurus')).toBeVisible() // joke card incl search term
        });
        it('Performs an unsuccessful search', () => {
            nav.performSearch('wxyz') // perform a search
            let searchHeading = $('.search-header')
            searchHeading.waitForDisplayed()
            assert.equal(searchHeading.getText(), 'Search Results') // correct page heading
            let resultsDescription = $('h6').getText()
            chaiExpect(resultsDescription).to.equal('There are no results for wxyz')
        });
        it('Performs a search with no content', () => {
            nav.performSearch('') // perform a search
            let searchHeading = $('.search-header')
            searchHeading.waitForDisplayed()
            assert.equal(searchHeading.getText(), 'Search Results') // correct page heading
            let resultsDescription = $('h6').getText()
            chaiExpect(resultsDescription).to.equal('Give the search bar something to look for, silly!')
        });
        it('Sign up navigates to register', () => {
            nav.clickNavRegister();
            const currentUrl = browser.getUrl();
            assert.equal(currentUrl, 'https://www.joketrainer.com/register');
        });
        it('Log in navigates to login', () => {
            nav.clickNavLogin();
            const currentUrl = browser.getUrl();
            assert.equal(currentUrl, 'https://www.joketrainer.com/login');
        });
    });

    describe('Navbar Functionality When Logged In', () => {
        // This test set requires initial login from the first test
        it('Favorites navigates to favorites', () => {
            nav.clickNavFavorites();
            login.login(username, password);
            const currentUrl = browser.getUrl();
            assert.equal(currentUrl, 'https://www.joketrainer.com/favorites');
        });
        it('Trainer navigates to trainer', () => {
            nav.clickNavTrainer();
            const currentUrl = browser.getUrl();
            assert.equal(currentUrl, 'https://www.joketrainer.com/favorites/trainer');
        });
        it('Add a Joke navigates to add a joke', () => {
            nav.clickNavAddJoke();
            const currentUrl = browser.getUrl();
            assert.equal(currentUrl, 'https://www.joketrainer.com/add');
        });
        it('Logo navigates to dashboard', () => {
            nav.clickNavHome();
            const currentUrl = browser.getUrl();
            assert.equal(currentUrl, 'https://www.joketrainer.com/');
        });
        it('Performs a search that includes a user-added joke', () => {
            nav.performSearch('set') // perform a search
            let searchHeading = $('.search-header')
            searchHeading.waitForDisplayed()
            assert.equal(searchHeading.getText(), 'Search Results') // correct page heading
            let resultsDescription = $('h6').getText()
            chaiExpect(resultsDescription).to.include('set') // description incl search term
            expect($('.card-text*=set')).toBeVisible() // joke card incl search term
        });
        it('Log out logs the user out', () => {
            nav.clickNavLogout()
            const currentUrl = browser.getUrl();
            assert.equal(currentUrl, 'https://www.joketrainer.com/');
        });
    });

});