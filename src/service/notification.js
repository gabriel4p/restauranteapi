import FCM from 'fcm-push'

const serverKey = 'AAAAISfXvQ8:APA91bF9mTkNplr5RSX1BRKiMHxwMl_LuF5CZcU9ELEGFShnaUJHAaSOACCqoRsYFtaWXeV6ADGxvpyAsJx4l0CONsqHtthF3WOP-vWrazdhsZLcCP3CNzmcvFFFC007bagVB-WhtBCw'

var fcm = null
try {
  fcm = new FCM(serverKey)
  console.log('FCM OK')

} catch (e) {

}

module.exports = {
  sendMessage: (userToken, title, body) => {
    const message = {
      to: userToken,
      notification: {
        title: title,
        body: body
      }
    }

    return fcm.send(message)
  }
}