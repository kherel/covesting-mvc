import superagent from 'superagent'

const url = process.env.BACKEND_URL

export const createUser = async () => {

  let res = await superagent
    .get(`${url}/users`)
    .set('Accept', 'application/json')


  console.log(res)

}


// const showUser
// const updateUser
// const deleteUser

// const createToken
// const sendConfirmEmail
// const sendResetPassword

