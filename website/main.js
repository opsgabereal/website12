<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Custom Browser</title>
  <style>
    /* Your CSS styles here */
  </style>
</head>
<body>
  <div id="browser-container">
    <div id="address-bar">
      <input type="text" id="url-input" placeholder="Enter URL">
      <button id="go-button">Go</button>
    </div>
    <div id="content">
      <!-- Web content will be displayed here -->
    </div>
  </div>

  <script>
    document.addEventListener('DOMContentLoaded', function () {
      // Add event listener for the "Go" button
      document.getElementById('go-button').addEventListener('click', navigate);
    });

    function navigate() {
      var urlInput = document.getElementById('url-input').value;
      var contentDiv = document.getElementById('content');

      // Basic URL validation
      if (!isValidURL(urlInput)) {
        alert('Invalid URL. Please enter a valid web address.');
        return;
      }

      // Reset content
      contentDiv.innerHTML = '';

      // Create an iframe element for displaying web content
      var iframe = document.createElement('iframe');
      iframe.src = urlInput;
      iframe.width = '100%';
      iframe.height = '100%';
      iframe.style.border = 'none';

      // Append iframe to the content div
      contentDiv.appendChild(iframe);
    }

    function isValidURL(url) {
      // Basic URL validation using a regular expression
      var urlPattern = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
      return urlPattern.test(url);
    }
  </script>
</body>
</html>
