module.exports = {
    "our first test": function(browser) {
        browser
            .url('https://news.ycombinator.com/')
            .waitForElementVisible('.hnname', 10000)
            .assert.containsText('.hnname', 'Hacker News')
    },

    "our second test": function(browser) {
        browser
            .url('https://news.ycombinator.com/')
            .waitForElementVisible('.hnname', 10000)
            .assert.containsText('.hnname', 'Hacker News')
    },

    "our third test": function(browser) {
        browser
            .url('https://news.ycombinator.com/')
            .waitForElementVisible('.hnname', 10000)
            .assert.containsText('.hnname', 'Hacker News')
    },

    "our forth test": function(browser) {
        browser
            .url('https://news.ycombinator.com/')
            .waitForElementVisible('.hnname', 10000)
            .assert.containsText('.hnname', 'Hacker News')
    },

    "our fifth test": function(browser) {
        browser
            .url('https://news.ycombinator.com/')
            .waitForElementVisible('.hnname', 10000)
            .assert.containsText('.hnname', 'Hacker News')
    },
}