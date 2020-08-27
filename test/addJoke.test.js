const login = require('../page/login.page');
const add = require('../page/addJoke.page');
import { username, password } from '../td';
import { logButton } from '../page/navbar.page'

describe('Add, Edit and Delete User-Generated Joke', () => {

    // These tests are inherently interdependent as they rely on the life cycle of a user-generated joke
    
    browser.url('/add');

    it('Adds a new joke', () => {
        login.login(username, password);
        // adds a new joke with custom question/answer/hint
        add.addJoke("test question", "test answer", "test hint");
    });
    it('Confirms addition of new user joke', () => {
        add.confirmNewJoke("test question"); // user generated question should appear on front of card
    });
    it('Performs a search that includes a user-added joke', () => {
        add.searchUserJoke("test question");
    });
    it('User joke exists in category context', () => {
        add.confirmJokeInCategory(); // checks user joke button formation in category context
    });
    it('Edits new user joke', () => {
        add.editJoke('This is an intriguing question'); // alter user joke's question and confirm change
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

