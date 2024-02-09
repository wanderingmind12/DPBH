const defaultCheckedCheckboxes = document.querySelectorAll('input[type="checkbox"]:checked[checked]');
defaultCheckedCheckboxes.forEach((checkbox) => {
    const parentDiv = checkbox.closest('div');
    if (parentDiv) {
        parentDiv.style.border = '2px solid red';
    }    
});    
(function() {
  'use strict';

  // Select all checkboxes
  const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked[checked]');

  // Array to store extracted labels
  const extractedLabels = [];

  // Iterate through each checkbox
  checkboxes.forEach(checkbox => {
    // Get the associated label element
    const label = checkbox.labels[0];  // Access the first associated label

    // Check if a label is found
    if (label) {
      extractedLabels.push(label.textContent.trim());  // Extract and trim text content
    } else {
      console.warn('Checkbox without a label found:', checkbox);  // Log a warning if no label is found
    }  
  });  

  // Do something with the extracted labels (e.g., display them, store them, etc.)
  console.log('Extracted labels:', extractedLabels);  // Example: log the labels to the console
})();  



// Check the exception list before automatically unchecking checkboxes
checkExceptionList();

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === 'addException') {
    addException();
  } else if (request.action === 'removeException') {
    removeException();
  }
});

function uncheckAllCheckboxes() {
  var checkboxes = document.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach(function (checkbox) {
    checkbox.checked = false;
  });
}

function checkExceptionList() {
  chrome.storage.sync.get({ exceptions: [] }, function (data) {
    var exceptions = data.exceptions || [];
    var currentUrl = window.location.hostname;

    if (!exceptions.includes(currentUrl)) {
      uncheckAllCheckboxes();
    }
  });
}

function addException() {
  chrome.storage.sync.get({ exceptions: [] }, function (data) {
    var exceptions = data.exceptions || [];
    var currentUrl = window.location.hostname;

    if (!exceptions.includes(currentUrl)) {
      exceptions.push(currentUrl);
      chrome.storage.sync.set({ exceptions: exceptions }, function () {
        console.log('Exception added for ' + currentUrl);
      });
    } else {
      console.log('Exception already exists for ' + currentUrl);
    }
  });
}

function removeException() {
  chrome.storage.sync.get({ exceptions: [] }, function (data) {
    var exceptions = data.exceptions || [];
    var currentUrl = window.location.hostname;

    var index = exceptions.indexOf(currentUrl);
    if (index !== -1) {
      exceptions.splice(index, 1);
      chrome.storage.sync.set({ exceptions: exceptions }, function () {
        console.log('Exception removed for ' + currentUrl);
      });
    } else {
      console.log('No exception found for ' + currentUrl);
    }
  });
}





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


