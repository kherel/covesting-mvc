import React, { Component } from 'react'

import {
  createUser,
  showUser,
  updateUser,
  deleteUser,
  createToken,
  sendConfirmEmail,
  sendResetPassword,
} from "../../store/entities/user/actions"

const email = "niten2@yandex.ru"
const password = "password"

export default class Example extends Component {
  render() {
    return (
      <div>

        <br />
        <button onClick={() =>  createUser({ email, password }) }> createUser </button>
        <br />
        <button onClick={() => showUser() }> showUser </button>
        <br />
        <button onClick={() => updateUser({ email, password }) }> updateUser </button>
        <br />
        <button onClick={() => deleteUser() }> deleteUser </button>
        <br />
        <button onClick={() => createToken({ email, password }) }> createToken </button>
        <br />
        <button onClick={() => sendConfirmEmail({ email }) }> sendConfirmEmail </button>
        <br />
        <button onClick={() => sendResetPassword({ email }) }> sendResetPassword </button>
        <br />

      </div>
    )
  }
}

