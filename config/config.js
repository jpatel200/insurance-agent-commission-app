// config.js
const env = process.env.NODE_ENV; // 'dev' or 'test' or prod

const dev = {
  app: {
    port: 3000
  }
};

const test = {
  app: {
    port: 5000
  }
};

const prod = {
  app: {
    port: 5000
  }
};

const config = {
  dev,
  prod,
  test
};


const defaultConfig = { app: { port: 3000 } };
const resultConfig = config[env] || defaultConfig;

module.exports = resultConfig;
