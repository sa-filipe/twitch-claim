chrome.browserAction.setBadgeText({text: " twt "});
chrome.browserAction.setBadgeBackgroundColor({color: "#6441a5"});

chrome.browserAction.onClicked.addListener(function (tab) {
    chrome.tabs.executeScript(tab.ib, {
        file: 'mCode.js'
    });
});