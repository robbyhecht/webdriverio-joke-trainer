class About {

    get aboutHeading() { return $('#activities-header') }
    get aboutContents() { return $('.index-left-contents') }
    get aboutLink() { return $$('.index-left-activity-container .sidebar-image-container a') }
    get aboutButton() { return $('.about-button-large') }

}

module.exports = new About