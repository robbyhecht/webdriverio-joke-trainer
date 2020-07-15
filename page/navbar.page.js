class Navbar {

    get navbar() {return $('#nav')}
    get home() {return $('#navbar-logo-link')}
    get favorites() {return $('.navbar-item=Favorites')}
    get trainer() {return $('.navbar-item=Trainer')}
    get addJoke() {return $('.navbar-item=Add a Joke')}
    get searchBar() {return $('#searchbox')}
    get searchButton() {return $('.search-button')}
    get registerButton() {return $('.register-button')}
    get logButton() {return $('.log-button')}

    confirmNavItems() {
        this.navbar.waitForDisplayed()
        expect(this.home).toBeVisible()
        expect(this.favorites).toBeVisible()
        expect(this.trainer).toBeVisible()
        expect(this.addJoke).toBeVisible()
        expect(this.searchBar).toBeVisible()
    }
    
    clickNavHome() {
        this.home.waitForDisplayed()
        this.home.click()
    }
    clickNavFavorites() {
        this.favorites.waitForDisplayed()
        this.favorites.click()
    }
    clickNavTrainer() {
        this.trainer.waitForDisplayed()
        this.trainer.click()
    }
    clickNavAddJoke() {
        this.addJoke.waitForDisplayed()
        this.addJoke.click()
    }
    performSearch(searchTerm) {
        this.searchBar.waitForDisplayed()
        this.searchBar.click()
        browser.keys(searchTerm)
        this.searchButton.click()
    }
    clickNavRegister() {
        this.registerButton.waitForDisplayed()
        this.registerButton.click()
    }
    clickNavLogin() {
        this.logButton.waitForDisplayed()
        this.logButton.click()
    }
    clickNavLogout() {
        this.logButton.waitForDisplayed()
        this.logButton.click()
    }

}

module.exports = new Navbar