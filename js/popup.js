// ALL THE REQUESTS ARE SENT FROM HERE
// TO THE CONTENT SCRIPT
// REQUEST FOR REVERTING 
document.getElementById('revert').addEventListener('click', function() {
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { action: 'Revert' });
  });
});

// Request FOR UNCHECK
document.getElementById('uncheckBtn').addEventListener('click', function() {
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { action: 'uncheckCheckboxes' });
  });
});


document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('addExceptionButton').addEventListener('click', function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { action: 'addException' });
    });
  });

  document.getElementById('removeExceptionButton').addEventListener('click', function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { action: 'removeException' });
    });
  });
});
