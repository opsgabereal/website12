const express = require('express');
const fetch = require('node-fetch');
const app = express();
const port = 3000;

// Replace YOUR_API_KEY with your actual Google Custom Search JSON API key
const apiKey = 'YOUR_API_KEY';

app.use(express.static('public'));

app.get('/search', async (req, res) => {
  const searchQuery = req.query.q;
  const apiUrl = `https://www.googleapis.com/customsearch/v1?q=${encodeURIComponent(searchQuery)}&key=${apiKey}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error fetching search results:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
