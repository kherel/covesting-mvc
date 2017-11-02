import request from 'superagent'

export let handleSubscribe = options => {
  let host

  if (process.env.NODE_ENV === 'production') {
    host = 'http://104.131.172.109'
  } else {
    host = 'http://localhost:8080'
  }

  request
    .post(host + '/subscribe')
    .set('Content-Type', 'application/json;charset=utf-8')
    .send({
      email: options.email,
    })
    .end(function(err, response) {
      if (
        response.status < 300 ||
        (response.status === 400 && response.body.title === 'Member Exists')
      ) {
        console.log('Signed Up!', options.email)
      } else {
        console.log('Sign Up Failed!', options.email)
      }
    })
}
