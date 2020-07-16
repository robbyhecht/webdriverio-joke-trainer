const login = require('../page/login.page');
const add = require('../page/addJoke.page');
const categories = require('../page/categories.page');
const button = require('../page/buttons.page');
const nav = require('../page/navbar.page')
import { username, password } from '../td';

describe('Add, Edit and Delete User-Generated Joke', () => {
    
    browser.url('/add');

    // add additional test for edit button?
    // should probably incorporate the search bar user joke test into this module or make separate new joke in that module


    it('Adds a new joke', () => {
        // shorten this to external function
        login.login(username, password);
        add.addHeading.waitForDisplayed();
        add.addQuestion.setValue('This is a test question');
        add.addAnswer.setValue('This is a test answer');
        add.addHint.setValue('This is a test hint');
        add.firstCheckbox.click();
        add.addButton.click();
    });
    it('Confirms addition of new user joke', () => {
        categories.selectMyJokes();
        $('.main-header=My Jokes').waitForDisplayed()
        expect($('.card-text=This is a test question')).toBeVisible()
    });
    it('Performs a search that includes a user-added joke', () => {
        nav.performSearch('test question') // perform a search
        let searchHeading = $('.search-header')
        searchHeading.waitForDisplayed()
        assert.equal(searchHeading.getText(), 'Search Results') // correct page heading
        let resultsDescription = $('h6').getText()
        chaiExpect(resultsDescription).to.include('test question') // description incl search term
        expect($('.card-text*=test question')).toBeVisible() // joke card incl search term
    });
    it('User joke exists in category context', () => {
        categories.selectCategory()
        $('.main-header=Animals').waitForDisplayed()
        expect(categories.userJokeExists).toExist();
    });
    it('Edits new user joke', () => {
        categories.selectMyJokes();
        button.editButton.click()
        add.addQuestion.setValue('This is an intriguing question')
        $('.button=Submit').click()
        expect($('.card-text=This is an intriguing question')).toBeVisible()
    });
    it('Brings up delete modal and clicks cancel', () => {
        button.deleteButton.click()
        button.deleteModal.waitForDisplayed()
        button.cancelButtonModal.click()  
    });
    it('Brings up delete modal and closes modal', () => {
        button.deleteButton.click()
        button.deleteModal.waitForDisplayed()
        button.closeModalX.click()      
    });
    it('Deletes joke', () => {
        button.deleteButton.click()
        button.deleteModal.waitForDisplayed()
        button.deleteButtonModal.click()
        expect($('.card-text=This is an intriguing question')).not.toBeVisible()  
        nav.logButton.click()
    });

});

