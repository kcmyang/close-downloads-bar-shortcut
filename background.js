// Listener for commands
chrome.commands.onCommand.addListener(function (command) {
  if (command === "close_downloads_bar") {
    chrome.downloads.setShelfEnabled(false)
    chrome.downloads.setShelfEnabled(true)
  }
})
