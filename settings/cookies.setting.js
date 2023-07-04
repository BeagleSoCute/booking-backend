const cookieHttpOnlyConfigs = {
  // domain: 'localhost',
  // path: '/',
  httpOnly: false,
  secure: true,
  sameSite: "none",     
  domain: 'http://localhost:3000'


};

const cookieNotHttpOnlyConfigs = {
  httpOnly: false,
  secure: true,
  // domain: 'localhost:3000'
};

module.exports = {
  cookieHttpOnlyConfigs,
  cookieNotHttpOnlyConfigs,
};
