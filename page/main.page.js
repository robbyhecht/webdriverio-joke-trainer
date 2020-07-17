class Main {

    get dashboardHeading() { return $('#index-header') } // home page heading
    get mainHeading() { return $('.main-header') } // general page heading
    get homepageDescription() { return $$('.main-text')[1] } // home page explanation text
    get pageDescription() { return $('.main-text') } // page explanation for other pages
    

}

module.exports = new Main