window.addEventListener('load', function() {
  var checkboxes = document.querySelectorAll('input[type="checkbox"]');
  for (var i = 0; i < checkboxes.length; i++) {
    checkboxes[i].checked = false;
  }
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'checkCheckboxes') {
      checkAllCheckboxes();
  }
  else if (request.action === 'uncheckCheckboxes') {
    uncheckAllCheckboxes();
  }
});

function checkAllCheckboxes() {
  var checkboxes = document.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach(function(checkbox) {
      checkbox.checked = checkbox.defaultChecked;
  });
}
function uncheckAllCheckboxes() {
  var checkboxes = document.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach(function(checkbox) {
    checkbox.checked = false;
  });
}


