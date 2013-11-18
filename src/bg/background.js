chrome.browserAction.onClicked.addListener(function(tab) {
    var console = chrome.extension.getBackgroundPage().console;
    chrome.tabs.executeScript(null, {file: "js/content.js"});
});