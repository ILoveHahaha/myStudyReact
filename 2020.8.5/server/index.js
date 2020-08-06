const express = require('express')
const users = require('./routes/user')
const app = express();
const debug = require('debug')('my-application')

app.use('/api/users', users)

app.listen(3030, () => {
  debug('hahaha')
});

