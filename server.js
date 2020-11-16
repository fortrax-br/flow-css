const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('src'));

app.use('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.listen(3003, () => console.log('serve running in port 3003'));
