const register = require("./register");
const login = require("./login");
const getCurrent = require("./getCurrent");
const logout = require("./logout");
const updateSubscription = require("./updateSubscription");
const resendEmail = require("./resendEmail")
const updateAvatar = require("./updateAvatar");
const verify = require("./verify")

module.exports = {
  register,
  login,
  getCurrent,
  logout,
  updateSubscription,
  updateAvatar,
  verify,
  resendEmail,
};