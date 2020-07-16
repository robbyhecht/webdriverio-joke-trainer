class addJoke {

    get addHeading() { return $('h3=Add a Joke') }
    get addQuestion() { return $('#id_question') }
    get addAnswer() { return $('#id_answer') }
    get addHint() { return $('#id_hint') }
    get firstCheckbox() { return $('#id_category_0') }
    get addButton() { return $('.new-joke-button') }
    
}

module.exports = new addJoke