import authProvider from "utils/auth_provider"
import request from 'superagent'

const url = process.env.BACKEND_URL

export const createUser = async () => {
  const res = await request
    .post(`${url}/users`)
    .set('Accept', 'application/json')
    // .send({ email: 'test@test.com', password: 'password' })
    .send({ email: 'niten2@yandex.ru', password: 'password' })

  console.log(res.body)
}

export const showUser = async () => {
  const token = authProvider.fetchToken()
  const res = await request
    .get(`${url}/users`)
    .set('Accept', 'application/json')
    .set('Authorization', token)
    // .send({ email: 'test@test.com', password: 'password' })
    .send({ email: 'niten2@yandex.ru', password: 'password' })

  console.log(res.body)
}

export const updateUser = async () => {
  const token = authProvider.fetchToken()
  const res = await request
    .put(`${url}/users`)
    .set('Accept', 'application/json')
    .set('Authorization', token)
    .send({ email: 'test2@test.com', password: 'new password' })

  console.log(res.body)
}

export const deleteUser = async () => {
  const token = authProvider.fetchToken()
  const res = await request
    .delete(`${url}/users`)
    .set('Accept', 'application/json')
    .set('Authorization', token)

  console.log(res.body)
}

export const createToken = async () => {
  const res = await request
    .put(`${url}/auth/token`)
    .set('Accept', 'application/json')
    // .send({ email: 'test@test.com', password: 'password' })
    .send({ email: 'niten2@yandex.ru', password: 'password' })

  const token = res.body.token

  if (token) {
    authProvider.saveToken(token)
    console.log(token)
    console.log("token save in localStorage")
  } else {
    console.log(res.body)
  }

}

export const removeToken = async () => {
  authProvider.removeToken()

  console.log("removeToken success")
}

export const sendConfirmEmail = async () => {
  const token = authProvider.fetchToken()
  const res = await request
    .post(`${url}/auth/send_confirm`)
    .set('Accept', 'application/json')
    .set('Authorization', token)
    // .send({ email: 'test@test.com' })
    .send({ email: 'niten2@yandex.ru' })

  console.log(res.body)
}

export const sendResetPassword = async () => {
  const token = authProvider.fetchToken()
  const res = await request
    .post(`${url}/auth/send_reset_password`)
    .set('Accept', 'application/json')
    .set('Authorization', token)
    // .send({ email: 'test@test.com' })
    .send({ email: 'niten2@yandex.ru' })

  console.log(res.body)
}
