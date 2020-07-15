class Categories {

    get categoriesHeading() { return $$('.categories-header')[1] }
    get firstCategory() { return $('.categories-list li:nth-child(1) a') }
    get myJokesCategory() { return $(".my-jokes") }

    selectCategory() {
        this.firstCategory.waitForDisplayed()
        this.firstCategory.click()
    }

}

module.exports = new Categories