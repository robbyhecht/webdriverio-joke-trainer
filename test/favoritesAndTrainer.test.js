const login = require('../page/login.page');
const nav = require('../page/navbar.page');
const button = require('../page/buttons.page');
const main = require('../page/main.page');
import { username, password } from '../td'
import { jokeCard, jokeTextQA } from '../page/card.page'

let jokeAnswer // will be used to capture and compare joke answer text

describe('Favorites and Trainer Pages', () => {
    
    browser.url('/favorites'); // will go to favorites page after user logs in

    describe('Favorites Page With No Joke Yet', () => {
        it('Page heading and description', () => { 
            login.login(username, password); // log in with td credentials to access favorites page
            main.checkPageHeading("Favorites");
            main.checkPageDescription("To add a joke to your favorites");
        });
        it('No jokes initially included in favorites', () => {
            // favorites should be empty before a joke is added
            expect(jokeCard).not.toExist();
        });
    });
    describe('Favorites Page With a Joke Added', () => {
        it('Adds the dashboard joke to favorites', () => {
            nav.clickNavHome();
            $('#index-header').waitForDisplayed();
            jokeAnswer = jokeTextQA.getText(); // capture dashboard joke answer
            button.addtoFavorites(); // adds joke and refreshes page
        });
        it('Adding joke to favorites from dashboard refreshes random joke', () => {
            const newJokeText = jokeTextQA.getText();
            assert.notEqual(jokeAnswer, newJokeText); // there should be a new random joke on dashboard
        });
        it('Confirms joke has been added to favorites', () => {
            nav.clickNavFavorites();
            const favJokeAnswer = jokeTextQA.getText();
            assert.equal(jokeAnswer, favJokeAnswer); // original joke should appear in favorites
        });
        it('Hyperlink links to trainer page', () => {
            $('#trainer-text-link').click();
            main.checkPageHeading("Trainer");
        });
    });
    describe('Trainer Page', () => {
        it('Includes trainer page description', () => {
            main.checkPageDescription("a hint to jog your memory");
        });
        it('Flip button should have solo button styling on trainer page', () => {
            expect(button.removeFromFavoritesButton).not.toBeVisible();
        });
        it('Joke is the same as the one added to favorites', () => {
            const trainerAnswer = $('.card-answer').getText();
            chaiExpect(trainerAnswer).to.include(jokeAnswer);
        });
        it('Removes joke from favorites', () => {
            nav.clickNavFavorites();
            button.removeFromFavorites();
            expect(jokeCard).not.toExist();
            nav.clickNavLogout() // log out
        });
    });


});