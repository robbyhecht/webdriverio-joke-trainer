const card = require('./card.page')

class Buttons {
    
    get flipButton() {return $('.flip-button')}
    get flipButtonLoggedIn() {return $('.flip-button-paired')}
    get flipButtonLoggedOut() {return $('.flip-button-solo')}
    get addToFavoritesButton() {return $('#add-button')}
    get editButton() {return $('#edit-button')}
    get deleteButton() {return $('#delete-button')}


    flipCard() {
        this.flipButton.waitForDisplayed()
        this.flipButton.click()
    }
    
}

module.exports = new Buttons