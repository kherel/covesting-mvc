import React, { Component } from 'react'

import {
  resetPassword,
} from "../../store/entities/user/actions"

const new_password = "123"

export default class Reset extends Component {
  render() {
    const code = this.props.location.query.code

    return (
      <div>

        change password

        <br />
        <button onClick={() =>  resetPassword({ code, new_password }) }> resetPassword </button>

      </div>
    )
  }
}

