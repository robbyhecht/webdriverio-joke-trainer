class Buttons {
    
    get flipButton() {return $('.flip-button')}
    get flipButtonLoggedIn() {return $('.flip-button-paired')}
    get flipButtonLoggedOut() {return $('.flip-button-solo')}
    get addToFavoritesButton() {return $('#add-button')}
    get removeFromFavoritesButton() { return $('#remove-button') }
    get editButton() {return $('#edit-button')}
    get deleteButton() {return $('#delete-button')}
    get deleteModal() { return $('#modal-card-title=Are you sure you want to delete your joke?') }
    get cancelButtonModal() { return $('button=Cancel') }
    get closeModalX() { return $('.delete') }
    get deleteButtonModal() { return $('.delete-button-modal .button') }


    flipCard() {
        this.flipButton.waitForDisplayed()
        this.flipButton.click()
    }
    addtoFavorites() {
        this.addToFavoritesButton.waitForDisplayed()
        this.addToFavoritesButton.click()
    }
    removeFromFavorites() {
        this.removeFromFavoritesButton.waitForDisplayed()
        this.removeFromFavoritesButton.click()
    }
    
}

module.exports = new Buttons