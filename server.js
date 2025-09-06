const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Example broker codes. Replace with a real authentication store.
const brokerCodes = new Set(['ABC123', 'XYZ789']);

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.post('/login', (req, res) => {
  const { code } = req.body;
  if (brokerCodes.has(code)) {
    return res.redirect('/dashboard.html');
  }
  return res.redirect('/new-broker.html');
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
