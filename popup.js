//Event listener to inject script
document.addEventListener("DOMContentLoaded", () => {
  //get current tab and inject script
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      files: ["content.js"],
    });
  });
});
