module.exports = {
    "our first test": function(browser) {
        browser
            .url('https://news.ycombinator.com/')
            .waitForElementVisible('.hnname', 10000)
            .assert.containsText('.hnname', 'Hacker News')
    }
}