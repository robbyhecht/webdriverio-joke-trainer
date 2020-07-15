class Main {

    get mainHeading() { return $('.main-header') }
    get pageDescription() { return $$('.main-text')[1] }

}

module.exports = new Main