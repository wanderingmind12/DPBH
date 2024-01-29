// This is the content script that will be injected into the page.

// This will initially uncheck all checkboxes on the page. 
//  When the user clicks the extension icon, it will check all checkboxes on the page.
// When the user clicks the extension icon again, it will uncheck all checkboxes on the page.
window.addEventListener('load', function() {
  var checkboxes = document.querySelectorAll('input[type="checkbox"]');
  for (var i = 0; i < checkboxes.length; i++) {
    checkboxes[i].checked = false;
  }
});

// This will listen for messages from popup.js and perform the appropriate action.
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'Revert') {
      defaultCheckboxes();
  }
  else if (request.action === 'uncheckCheckboxes') {
    uncheckAllCheckboxes();
  }
});

// This will bring all the checkboxes to default.
function defaultCheckboxes() {
  var checkboxes = document.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach(function(checkbox) {
      checkbox.checked = checkbox.defaultChecked;
  });
}

// This will uncheck all checkboxes.
function uncheckAllCheckboxes() {
  var checkboxes = document.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach(function(checkbox) {
    checkbox.checked = false;
  });
}


