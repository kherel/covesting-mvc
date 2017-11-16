import authProvider from "utils/auth_provider"
import request from 'superagent'

const URL = process.env.BACKEND_URL

export const createUser = async (options) => {
  const { email, password } = options

  const res = await request
    .post(`${URL}/users`)
    .set('Accept', 'application/json')
    .send({ email, password })

  console.log(res.body)
}

export const showUser = async () => {
  const token = authProvider.fetchToken()

  const res = await request
    .get(`${URL}/users`)
    .set('Accept', 'application/json')
    .set('Authorization', token)

  console.log(res.body)
}

export const updateUser = async (options) => {
  const { email, password } = options

  const token = authProvider.fetchToken()
  const res = await request
    .put(`${URL}/users`)
    .set('Accept', 'application/json')
    .set('Authorization', token)
    .send({ email, password })

  console.log(res.body)
}

export const deleteUser = async () => {
  const token = authProvider.fetchToken()

  const res = await request
    .delete(`${URL}/users`)
    .set('Accept', 'application/json')
    .set('Authorization', token)

  console.log(res.body)
}

export const createToken = async (options) => {
  const { email, password } = options

  const res = await request
    .put(`${URL}/auth/token`)
    .set('Accept', 'application/json')
    .send({ email, password })

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

export const sendConfirmEmail = async (options) => {
  let { email } = options
  const token = authProvider.fetchToken()

  const res = await request
    .post(`${URL}/auth/send_confirm`)
    .set('Accept', 'application/json')
    .set('Authorization', token)
    .send({ email })

  console.log(res.body)
}

export const confirmEmail = async (options) => {
  const { code } = options
  const token = authProvider.fetchToken()

  const res = await request
    .post(`${URL}/auth/confirm`)
    .set('Accept', 'application/json')
    .set('Authorization', token)
    .send({ code })

  console.log(res.body)
}

export const sendResetPassword = async (options) => {
  const { email } = options

  const token = authProvider.fetchToken()
  const res = await request
    .post(`${URL}/auth/send_reset_password`)
    .set('Accept', 'application/json')
    .set('Authorization', token)
    .send({ email })

  console.log(res.body)
}

export const resetPassword = async (options) => {
  const { code, new_password } = options
  const token = authProvider.fetchToken()

  const res = await request
    .post(`${URL}/auth/reset_password`)
    .set('Accept', 'application/json')
    .set('Authorization', token)
    .send({ code, new_password })

  console.log(res.body)
}
