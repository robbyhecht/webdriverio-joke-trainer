const nav = require('../page/navbar.page');
const categories = require('../page/categories.page');
const button = require('../page/buttons.page')
class AddJoke {

    get addHeading() { return $('h3=Add a Joke') }
    get addQuestion() { return $('#id_question') }
    get addAnswer() { return $('#id_answer') }
    get addHint() { return $('#id_hint') }
    get firstCheckbox() { return $('#id_category_0') }
    get addButton() { return $('.new-joke-button') }

    addJoke() {
        // Adds a new user-specific joke to database
        this.addHeading.waitForDisplayed();
        this.addQuestion.setValue('This is a test question');
        this.addAnswer.setValue('This is a test answer');
        this.addHint.setValue('This is a test hint');
        this.firstCheckbox.click();
        this.addButton.click();
    }
    searchUserJoke() {
        // Uses search bar to search for user-generated joke
        nav.performSearch('test question');
        let searchHeading = $('.search-header');
        searchHeading.waitForDisplayed();
        assert.equal(searchHeading.getText(), 'Search Results'); // correct page heading
        let resultsDescription = $('h6').getText();
        chaiExpect(resultsDescription).to.include('test question'); // search description incl search term
        expect($('.card-text*=test question')).toBeVisible(); // joke card incl search term
    }
    confirmNewJoke() {
        // Confirms addition of new user-generated joke
        categories.selectMyJokes();
        $('.main-header=My Jokes').waitForDisplayed();
        expect($('.card-text=This is a test question')).toBeVisible();
    }
    confirmJokeInCategory() {
        //  Confirms that user joke is included in its designated category
        categories.selectCategory();
        $('.main-header=Animals').waitForDisplayed();
        expect(categories.userJokeExists).toExist();
    }
    editJoke() {
        // Edits the user joke question
        categories.selectMyJokes();
        button.editButton.click()
        this.addQuestion.setValue('This is an intriguing question')
        $('.button=Submit').click()
        expect($('.card-text=This is an intriguing question')).toBeVisible()
    }
    deleteModalCancel() {
        // Brings up the delete joke model and clicks to cancel the deletion
        button.deleteButton.click()
        button.deleteModal.waitForDisplayed()
        button.cancelButtonModal.click()  
    }
    deleteModalClose() {
        // Brings up the delete joke model and clicks the X to close the modal
        button.deleteButton.click()
        button.deleteModal.waitForDisplayed()
        button.closeModalX.click()
    }
    deleteJoke() {
        // Brings up delete joke modal and deletes the joke, then confirms deletion
        button.deleteButton.click()
        button.deleteModal.waitForDisplayed()
        button.deleteButtonModal.click()
        expect($('.card-text=This is an intriguing question')).not.toBeVisible()  
    }

}

module.exports = new AddJoke