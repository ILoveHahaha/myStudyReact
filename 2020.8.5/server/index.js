const express = require('express');
const users = require('./routes/user');
const app = express();
const debug = require('debug')('my-application');
const bodyParser = require('body-parser');
const auth = require('../src/reducers/auth');

app.use(bodyParser.json());
app.use('/api/users', users);
app.use('/api/auth', auth);

app.listen(3030, () => {
  debug('hahaha')
});

