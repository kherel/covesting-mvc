import React, { Component } from 'react'

import {
  confirmEmail,
} from "../../store/entities/user/actions"

export default class Reset extends Component {
  render() {
    const code = this.props.location.query.code

    return (
      <div>

        change password

        <br />
        <button onClick={() => confirmEmail({ code }) }> confirmEmail </button>

      </div>
    )
  }
}

