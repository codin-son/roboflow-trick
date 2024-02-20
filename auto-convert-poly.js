function clickDropdown() {
  document.querySelector('#dropdownPlaceholder').click();
}

function clickConvertToSmartPolygons() {
  // Find and click the "Convert to Smart Polygons" link
  Array.from(document.querySelectorAll('a.dropdown-item')).find(element => element.textContent.includes('Convert Boxes to Smart Polygons')).click();
}

function waitForSweetAlertToClose(callback) {
  const checkExist = setInterval(function() {
    const swalPopup = document.querySelector('.swal2-popup');
    if (!swalPopup || swalPopup.style.display === 'none') {
      clearInterval(checkExist);
      callback(); // Proceed to next step
    }
  }, 100); // check every 100 milliseconds
}

function clickNextIcon() {
  document.querySelector('a.next.icon').click();
}

function startProcess() {
  clickDropdown();
  setTimeout(() => {
    clickConvertToSmartPolygons();
    // Wait for the SweetAlert to close before clicking the next icon
    waitForSweetAlertToClose(() => {
      clickNextIcon();
      // Adjust the delay according to the page load time
      setTimeout(() => {
        startProcess(); // Recursively start the process to loop
      }, 1000); // Wait for 5 seconds before starting the loop again, adjust this delay as needed
    });
  }, 1000); // Adjust delay as needed
}

startProcess(); // Kick off the process
