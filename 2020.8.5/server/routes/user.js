const express = require('express');
const router = express.Router();
const isEmpty = require('lodash/isEmpty');
const validator = require('validator');

const validatorInput = (data) => {
  let errors = {};
  if (validator.isEmpty(data.username)) {
    errors.username = '请填写用户名'
  }
  if (!validator.isEmail(data.email)) {
    errors.email = '请填写邮箱'
  }
  if (validator.isEmpty(data.password)) {
    errors.password = '请填写密码'
  }
  if (validator.isEmpty(data.passwordConfirmation)) {
    errors.passwordConfirmation = '请填写确认密码'
  }
  if (!validator.equals(data.password, data.passwordConfirmation)) {
    errors.passwordConfirmation = '两次密码不同'
  }
  return {
    errors,
    isValid: isEmpty(errors)
  }
}

router.post('/', (req, res) => {
  const {errors, isValid} = validatorInput(req.body);
  if (!isValid) {
    res.status(400).json(errors)
  }
  else {
    res.status(204).send()
  }
});

module.exports = router;
