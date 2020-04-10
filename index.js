'use strict';

function click(e) {
  if (e.target.id === 'show') {
    chrome.tabs.executeScript(null,
      { file: 'showPwd.js' });
  } else {
    chrome.tabs.executeScript(null,
      { file: 'hidePwd.js' });
  }
  window.close();
}

document.addEventListener('DOMContentLoaded', function () {
  var divs = document.querySelectorAll('div');
  for (var i = 0; i < divs.length; i++) {
    divs[i].addEventListener('click', click);
  }
});
