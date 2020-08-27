class SearchResults {

    get searchHeading() { return $('.search-header') } // search page heading
    get resultsDescription() { return $('h6').getText() } // search results description
    
    checkSearchPageHeading(expectedHeading) {
        this.searchHeading.waitForDisplayed()
        const heading = this.searchHeading.getText()
        assert.equal(heading, expectedHeading)
    }
}

module.exports = new SearchResults