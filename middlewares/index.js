const validation = require("./validation");
const ctrlWrapper = require("./ctrlWrapper");
const authenticate = require("./authenticate");
const upload = require("./upload");
const validateBody = require("./validateBody");

module.exports = {
  validation,
  ctrlWrapper,
  authenticate,
  validateBody,
  upload,
};