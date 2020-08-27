class LoginPage {

    get username() { return $('#id_username') }
    get password() { return $('#id_password') }
    get loginBtn() { return $('.login-form-button') }
    get registerBtn() { return $('.register-button-login') }
    get authHeader() { return $('.auth-header') }
    get loginAlert() { return $('.login-alert') }

    login(username, password) {
        this.authHeader.waitForDisplayed()
        this.username.addValue(username)
        this.password.addValue(password)
        this.loginBtn.click()
    }
    clickRegisterButton() {
        this.registerBtn.waitForDisplayed()
        this.registerBtn.click()
    }
    checkLoginAlert(alertMessage) {
        this.loginAlert.waitForDisplayed()
        assert.equal(this.loginAlert.getText(), alertMessage)
    }

}

module.exports = new LoginPage