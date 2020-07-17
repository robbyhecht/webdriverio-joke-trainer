const login = require('../page/login.page');
const nav = require('../page/navbar.page');
const button = require('../page/buttons.page');
import { username, password } from '../td'
import { jokeCard, jokeTextQA } from '../page/card.page'
import { mainHeading, pageDescription } from '../page/main.page'

let jokeAnswer

describe('Favorites and Trainer Pages', () => {
    
    browser.url('/favorites');

    describe('Favorites Page With No Joke Yet', () => {
        it('Page heading and description', () => { 
            login.login(username, password);
            mainHeading.waitForDisplayed();
            const heading = mainHeading.getText();
            assert.equal(heading, "Favorites");
            const description = pageDescription.getText();
            chaiExpect(description).to.include("To add a joke to your favorites");
        });
        it('No jokes initially included in favorites', () => {
            expect(jokeCard).not.toExist();
        });
    });
    describe('Favorites Page With a Joke Added', () => {
        it('Adds a joke to favorites', () => {
            nav.clickNavHome();
            $('#index-header').waitForDisplayed();
            jokeAnswer = jokeTextQA.getText();
            button.addtoFavorites();
        });
        it('Adding joke to favorites from dashboard refreshes random joke', () => {
            const newJokeText = jokeTextQA.getText()
            assert.notEqual(jokeAnswer, newJokeText)
        });
        it('Confirms joke has been added to favorites', () => {
            nav.clickNavFavorites();
            const favJokeAnswer = jokeTextQA.getText();
            assert.equal(jokeAnswer, favJokeAnswer);
        });
        it('Links to trainer page', () => {
            $('#trainer-text-link').click();
            const heading = mainHeading.getText();
            assert.equal(heading, "Trainer");
        });
    });
    describe('Trainer Page', () => {
        it('Includes trainer page description', () => {
            const description = pageDescription.getText();
            chaiExpect(description).to.include("a hint to jog your memory");
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
            nav.clickNavLogout()
        });
    });


});