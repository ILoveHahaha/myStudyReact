const express = require('express');
const users = require('./routes/user');
const app = express();
const debug = require('debug')('my-application');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use('/api/users', users);

app.listen(3030, () => {
  debug('hahaha')
});

