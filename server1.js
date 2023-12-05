const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello friend from Server 1!');
});

app.listen(PORT, () => {
  console.log(`Server 1 is running on port ${PORT}`);
});
