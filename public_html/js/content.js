var page = chrome.extension.getURL('template/page.html');
var js_url = chrome.extension.getURL('js/app.js');
var css_url = chrome.extension.getURL('css/app.css');

var xhr = new XMLHttpRequest();
xhr.open("GET", page, true);
xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
        var _html = xhr.responseText;
        _html = _html.replace('%URL%', window.location.href)
        .replace('%APP_JS%', js_url)
        .replace('%APP_CSS%', css_url);
        document.write(_html);
    }
};
xhr.send();