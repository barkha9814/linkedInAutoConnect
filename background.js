chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    
    if (changeInfo.status === "complete") 
    {
            const url = new URL(tab.url);            
            
                    if (url.hostname === "https://www.linkedin.com/*") {
                    
                        chrome.tabs.executeScript(tabId, {file: "linkedin.js"});
                    } else {
                        return;
                    }

    }
});
