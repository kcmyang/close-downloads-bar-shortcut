// Listener for commands
chrome.commands.onCommand.addListener(function (command) {
  switch (command) {
    case "close_downloads_bar": {
      chrome.downloads.setShelfEnabled(false)
      chrome.downloads.setShelfEnabled(true)
      break
    }
    case "toggle_tab_pinned": {
      chrome.tabs.query({ active: true }, function (tabs) {
        if (tabs.length === 0) return;

        chrome.tabs.update(tabs[0].id, { pinned: !tabs[0].pinned })
      })
      break
    }
    case "toggle_tab_muted": {
      chrome.tabs.query({ active: true }, function (tabs) {
        if (tabs.length === 0) return;

        chrome.tabs.update(tabs[0].id, { muted: !tabs[0].mutedInfo.muted })
      })
      break
    }
  }
})
