// background.js
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.data) {
        console.log("Received data:", message.data);
        // Có thể xử lý thêm dữ liệu tại đây hoặc lưu vào file
    }
});
