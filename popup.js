//Event listener to inject script
document.addEventListener("click", () => {
  //get current tab and inject script
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    console.log(tabs[0]);
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      files: ["content.js"],
    });
  });
  console.log("Script injected");
});
