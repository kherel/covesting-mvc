import superagent from 'superagent'

const url = process.env.BACKEND_URL
console.log(url)

export const createUser = async () => {

  let res = await superagent
    .get(`${url}/users`)
    .set('Accept', 'application/json')
  // let res = await superagent.get(`${url}/users`)
  console.log(res)



}


// const showUser
// const updateUser
// const deleteUser

// const createToken
// const sendConfirmEmail
// const sendResetPassword

