const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(bodyParser.json());

require('./api/')(app);

app.listen(5000, () => {
  console.log('server listening on port 5000');
});
