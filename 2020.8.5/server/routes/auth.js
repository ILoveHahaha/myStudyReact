const express = require('express');
// const sqlFn = require('../mysql');
const router = express.Router();
const jwt = require('jsonwebtoken');
const config = require('../config');
const ImitateDatabase = require('../mysql/imitate');
let sqlFn = new ImitateDatabase();

router.post('/', (req, res) => {
  const { username, password } = req.body;
  const sql = 'select * from user where `username`=? AND `password`=?';
  const arr = [username, password];
  let tempStatus = sqlFn.findData('username', username);
  if (tempStatus.length) {
    if (tempStatus[0].password === password) {
      const token = jwt.sign({
        id: tempStatus[0].id,
        username: tempStatus[0].username
      }, config.jwtSecret);
      res.send(token);
    }
    else {
      res.status(401).json({errors: {from: '用户名密码错误'}})
    }
  }
  else {
    res.status(401).json({errors: {from: '用户没找到'}})
  }
  // sqlFn(sql, arr, function (data) {
  //   if (data.length > 0) {
  //     const token = jwt.sign({
  //       id: data[0].id,
  //       username: data[0].username
  //     }, config.jwtSecret);
  //     res.send(token);
  //   }
  //   else {
  //     res.status(401).json({errors: {from: '用户名密码错误'}})
  //   }
  // })
});

module.exports = router;
