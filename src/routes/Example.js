import React, { Component } from 'react'

import {
  createUser,
  showUser,
  updateUser,
  deleteUser,
  createToken,
  sendConfirmEmail,
  sendResetPassword,
} from "../store/entities/user/actions"

export default class Example extends Component {
  render() {
    return (
      <div>

        <br />
        <button onClick={createUser}> createUser </button>
        <br />
        <button onClick={showUser}> showUser </button>
        <br />
        <button onClick={updateUser}> updateUser </button>
        <br />
        <button onClick={deleteUser}> deleteUser </button>
        <br />
        <button onClick={createToken}> createToken </button>
        <br />
        <button onClick={sendConfirmEmail}> sendConfirmEmail </button>
        <br />
        <button onClick={sendResetPassword}> sendResetPassword </button>
        <br />

      </div>
    )
  }
}

