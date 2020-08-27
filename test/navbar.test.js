const nav = require('../page/navbar.page');
const login = require('../page/login.page');
const main = require('../page/main.page');
const search = require('../page/searchResults.page')
import { username, password } from '../td'

describe('Navbar Features', () => {

    browser.url('/')

    describe('Navbar Functionality When Logged Out', () => {
        it('Logo navigates to dashboard', () => {
            nav.clickNavHome();
            main.checkUrl('https://www.joketrainer.com/');
        });
        it('Favorites navigates to login with next set to favorites', () => {
            nav.clickNavFavorites();
            main.checkUrl('https://www.joketrainer.com/login?next=/favorites');
        });
        it('Trainer navigates to login with next set to favorites/trainer', () => {
            nav.clickNavTrainer();
            main.checkUrl('https://www.joketrainer.com/login?next=/favorites/trainer');
        });
        it('Add a Joke navigates to login with next set to add', () => {
            nav.clickNavAddJoke();
            main.checkUrl('https://www.joketrainer.com/login?next=/add');
        });
        it('Performs a successful search', () => {
            nav.performSearch('thesaurus') // perform a search
            search.checkSearchPageHeading('Search Results'); // check for correct page heading
            chaiExpect(search.resultsDescription).to.include('thesaurus'); // description incl search term
            expect($('.card-text*=thesaurus')).toBeVisible(); // joke card incl search term
        });
        it('Performs an unsuccessful search', () => {
            nav.performSearch('wxyz') // perform a search
            search.checkSearchPageHeading('Search Results')
            chaiExpect(search.resultsDescription).to.equal('There are no results for wxyz')
        });
        it('Performs a search with no content', () => {
            nav.performSearch('') // perform a search
            search.checkSearchPageHeading('Search Results')
            chaiExpect(search.resultsDescription).to.equal('Give the search bar something to look for, silly!')
        });
        it('Sign up navigates to register', () => {
            nav.clickNavRegister();
            main.checkUrl('https://www.joketrainer.com/register');
        });
        it('Log in navigates to login', () => {
            nav.clickNavLogin();
            main.checkUrl('https://www.joketrainer.com/login');
        });
    });

    describe('Navbar Functionality When Logged In', () => {
        // This test set requires initial login from the first test
        it('Favorites navigates to favorites', () => {
            nav.clickNavFavorites();
            login.login(username, password); // log user in
            main.checkUrl('https://www.joketrainer.com/favorites');
        });
        it('Trainer navigates to trainer', () => {
            nav.clickNavTrainer();
            main.checkUrl('https://www.joketrainer.com/favorites/trainer');
        });
        it('Add a Joke navigates to add a joke', () => {
            nav.clickNavAddJoke();
            main.checkUrl('https://www.joketrainer.com/add');
        });
        it('Logo navigates to dashboard', () => {
            nav.clickNavHome();
            main.checkUrl('https://www.joketrainer.com/');
        });
        it('Log out logs the user out', () => {
            nav.clickNavLogout()
            main.checkUrl('https://www.joketrainer.com/');
        });
    });

});