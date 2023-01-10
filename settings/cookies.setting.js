const cookieHttpOnlyConfigs = {
  httpOnly: true,
  secure: true,
};

const cookieNotHttpOnlyConfigs = {
  httpOnly: false,
  secure: true,
};

module.exports = {
  cookieHttpOnlyConfigs,
  cookieNotHttpOnlyConfigs,
};
