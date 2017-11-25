try {
  const dotenv = require('dotenv')
  dotenv.load()
} catch (e) { }

module.exports = {
  'development': {
    'userName': process.env.USER_NAME,
    'userPassword': process.env.USER_PASSWORD,
    'serverToken': process.env.SERVER_TOKEN
  },
  'production': {
    'userName': process.env.USER_NAME,
    'userPassword': process.env.USER_PASSWORD,
    'serverToken': process.env.SERVER_TOKEN
  }
}