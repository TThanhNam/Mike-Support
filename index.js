document.addEventListener('DOMContentLoaded', function () {
    const scrapeButton = document.getElementById('scrape-btn');
    if (scrapeButton) {
        scrapeButton.addEventListener('click', () => {
            chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
                chrome.scripting.executeScript({
                    target: { tabId: tabs[0].id },
                    files: ['content.js']
                });
            });
        });
    } else {
        console.error("scrape-btn button not found");
    }
});