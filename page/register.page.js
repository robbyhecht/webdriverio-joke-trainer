class Register {

    get registerUsername() { return $('#id_username') }
    get registerEmail() { return $('#id_email') }
    get registerPassword() { return $('#id_password') }
    get registerFirst() { return $('#id_first_name') }
    get registerLast() { return $('#id_last_name') }
    get registerFormButton() { return $('.registration-form-button') }
    get registerHeading() { return $('.auth-header=Register') }

    registerUniqueUser() {
        this.registerHeading.waitForDisplayed()
        this.registerUsername.addValue(`${Date.now()}user`)
        this.registerEmail.addValue(`${Date.now()}@website.com`)
        this.registerPassword.addValue(`${Date.now()}password`)
        this.registerFirst.addValue(`${Date.now()}first`)
        this.registerLast.addValue(`${Date.now()}last`)
    }

}

module.exports = new Register