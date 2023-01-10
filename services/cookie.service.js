const {
  cookieHttpOnlyConfigs,
  cookieNotHttpOnlyConfigs,
} = require("../settings/cookies.setting");

const clearCookies = (res) => {
  res.cookie("access_token", "", cookieHttpOnlyConfigs);
  res.cookie("refresh_token", "", cookieHttpOnlyConfigs);
  res.cookie("isAuth", false, cookieNotHttpOnlyConfigs);
};

module.exports = {
  clearCookies,
};
