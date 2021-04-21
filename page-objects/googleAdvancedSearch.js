module.exports = {
    url: 'https://www.google.com/advanced_search',
    elements: {
        mainQueryInputSelector : '[name="as_q"]',
        languageDropdownOpenerSelector : '#lr_button',
        languageDropdownValueSelector : '.goog-menuitem[value="lang_it"]',
        lastUpdateDropdownOpenerSelector : '#as_qdr_button',
        lastUpdateDropdownValueSelector : '.goog-menuitem[value="m"]',
        submitButtonSelector : '[type="submit"]',
        
    },
    commands: [{
        setQuery(value) {
            return this
                .setValue('@mainQueryInputSelector', value);
        },
        selectFilter(selector, value) {
            return this
                .click(selector)
                .click(`.goog-menuitem[value="${value}"]`);
        },
        search() {
            return this
                .click('@submitButtonSelector');
        }
    }]
}