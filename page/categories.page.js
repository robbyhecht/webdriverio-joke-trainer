class Categories {

    get categoriesHeading() { return $$('.categories-header')[1] }
    get categoriesPageHeadingContainer() { return $('.category-header-container') }
    get firstCategory() { return $('.categories-list li:nth-child(1) a') }
    get myJokesCategory() { return $(".my-jokes") }
    get userJokeExists() { return $('.triple-button-container') }

    selectCategory() {
        // navigates to animals category (the first category listed)
        this.firstCategory.waitForDisplayed()
        this.firstCategory.click()
    }
    selectMyJokes() {
        // navigates to my jokes
        this.myJokesCategory.waitForDisplayed()
        this.myJokesCategory.click()
    }

}

module.exports = new Categories