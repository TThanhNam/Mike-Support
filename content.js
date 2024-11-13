// content.js
function scrapeData() {
  // Thay đổi selector này tùy vào phần tử bạn muốn lấy từ trang web
  const data = document.querySelectorAll('h1, p'); // Ví dụ lấy các thẻ h1 và p
  const extractedData = [];

  data.forEach(element => {
      extractedData.push(element.innerText);
  });

  // Gửi dữ liệu lấy được về background script hoặc popup
  chrome.runtime.sendMessage({ data: extractedData });
}

scrapeData();
