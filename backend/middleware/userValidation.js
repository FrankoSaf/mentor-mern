const { validationResult } = require('express-validator');

const userValidation = (req, res, next) => {
  const result = validationResult(req).array();
  if (result.length !== 0) {
    res.status(300).send(result);
  } else {
    next();
  }
};

module.exports = { userValidation };
