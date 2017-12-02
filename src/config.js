try {
  const dotenv = require('dotenv')
  dotenv.load()
} catch (e) {
  console.log('erro ao carregar ".env" ')
  console.log(e)
}

module.exports = {
  DatabaseUrl: process.env.DATABASE_URL,
  ServerToken: process.env.SERVER_TOKEN,
  TokenFCM: process.env.TOKEN_FCM
}
