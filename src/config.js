try {
  const dotenv = require('dotenv')
  dotenv.load()
} catch (e) { }

module.exports = {
  //DbConnectionString: process.env.RestauranteConnectionString,
  DbConnectionString: 'postgres://gkhybjgblrtziq:d15d6f336c170a00f93b5ebe0708eecb18baa5a9084c91b1fe4dd8afea2e1257@ec2-50-16-199-246.compute-1.amazonaws.com:5432/defj76veoeqvck',
  ServerToken: process.env.SERVER_TOKEN
}