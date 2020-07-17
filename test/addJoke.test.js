const login = require('../page/login.page');
const add = require('../page/addJoke.page');
import { username, password } from '../td';
import { logButton } from '../page/navbar.page'


describe('Add, Edit and Delete User-Generated Joke', () => {
    
    browser.url('/add');

    it('Adds a new joke', () => {
        login.login(username, password);
        add.addJoke();
    });
    it('Confirms addition of new user joke', () => {
        add.confirmNewJoke();
    });
    it('Performs a search that includes a user-added joke', () => {
        add.searchUserJoke();
    });
    it('User joke exists in category context', () => {
        add.confirmJokeInCategory();
    });
    it('Edits new user joke', () => {
        add.editJoke();
    });
    it('Brings up delete modal and clicks cancel', () => {
        add.deleteModalCancel(); 
    });
    it('Brings up delete modal and closes modal', () => {
        add.deleteModalClose();      
    });
    it('Deletes joke and logs out', () => {
        add.deleteJoke();
        logButton.click();
    });

});

