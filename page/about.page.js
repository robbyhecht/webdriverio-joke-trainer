const main = require('../page/main.page')

class About {

    get aboutHeading() { return $('#activities-header') }
    get aboutContents() { return $('.index-left-contents') }
    get aboutLink() { return $$('.index-left-activity-container .sidebar-image-container a') }
    get aboutButton() { return $('.about-button-large') }

    cruiseLink() {
        this.aboutLink[0].waitForDisplayed()
        this.aboutLink[0].click()
    }
    favoritesLink() {
        this.aboutLink[1].waitForDisplayed()
        this.aboutLink[1].click()
    }
    trainerLink() {
        this.aboutLink[2].waitForDisplayed()
        this.aboutLink[2].click()
    }
    addJokeLink() {
        this.aboutLink[3].waitForDisplayed()
        this.aboutLink[3].click()
    }
    aboutButtonClick() {
        this.aboutButton.waitForDisplayed()
        this.aboutButton.click()
    }
    

}

module.exports = new About