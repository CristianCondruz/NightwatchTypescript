module.exports = {
    '@tags': ['google'],
    'Google Advanced Search: Elon Musk'(browser) {
        const mainQuery = 'Elon Musk';
        
        const page = browser.page.googleAdvancedSearch();
        const resultsPageQuerySelector = `#searchform [name="q"][value="${mainQuery}"]`;
        const resultsPageLanguageSelector = "//*[text() = 'Search Italian pages']";
        const resultsPageLastUpdateSelector = "//*[text() = 'Past month']";

        page
            .navigate()
            .setQuery(mainQuery)
            .selectFilter('@languageDropdownOpenerSelector', 'lang_it')
            .selectFilter('@lastUpdateDropdownOpenerSelector', 'm')
            .search()
            //.waitForElementPresent('[src="https://consent.google.com/intro?hl=ro&origin=https://www.google.com&continue=https://www.google.com/search?as_q%3DElon%2BMusk%26as_epq%3D%26as_oq%3D%26as_eq%3D%26as_nlo%3D%26as_nhi%3D%26lr%3Dlang_it%26cr%3D%26as_qdr%3Dm%26as_sitesearch%3D%26as_occt%3Dany%26safe%3Dimages%26as_filetype%3D%26tbs%3D&if=1&m=0&pc=s&wp=-1&gl=RO"]', 3000)
            //.frame(0)
            .waitForElementPresent('#zV9nZe', 3000)
            .click('#zV9nZe')
            .assert.urlContains('as_q=Elon+Musk', 'Params: Query is Elon Musk')
            .assert.urlContains('lr=lang_it', 'Params: language is Italian')
            .assert.urlContains('as_qdr=m', 'Params: Query is last month')
            
        browser.assert.visible(resultsPageQuerySelector,'UI: Elon Musk visible');
        browser.saveScreenshot('./test_ouput/screenshot.png')
    }
}