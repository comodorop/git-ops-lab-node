const express = require('express');

const app = express();

app.get('/', (_, res) => {
  res.send('Version 1');
});

app.listen(3000);
console.log('Server is running on port 3000');