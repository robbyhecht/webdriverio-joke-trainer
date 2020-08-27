
class Main {

    get dashboardHeading() { return $('#index-header') } // home page heading
    get mainHeading() { return $('.main-header') } // general page heading
    get homepageDescription() { return $$('.main-text')[1] } // home page explanation text
    get pageDescription() { return $('.main-text') } // page explanation for other pages
    
    checkPageHeading(expectedHeading) {
        this.mainHeading.waitForDisplayed()
        const heading = this.mainHeading.getText()
        assert.equal(heading, expectedHeading)
    }
    checkUrl(expectedUrl) {
        const url = browser.getUrl()
        assert.equal(url, expectedUrl)
    }
    checkPageDescription(expectedDescription) {
        this.pageDescription.waitForDisplayed()
        const description = this.pageDescription.getText()
        chaiExpect(description).to.include(expectedDescription);
    }
}

module.exports = new Main