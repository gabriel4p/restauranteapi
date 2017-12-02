import FCM from 'fcm-push'
import Config from '../config'

var fcm = null
try {
  fcm = new FCM(Config.TokenFCM)
} catch (e) {
  console.log('ERRO FCM')
  console.log(e.message)
}

module.exports = {
  sendMessage: (userTokens, title, body) => {
    const message = {
      registration_ids: userTokens,
      notification: {
        title: title,
        body: body
      }
    }

    return fcm.send(message)
  }
}