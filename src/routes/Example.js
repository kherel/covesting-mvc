import React, { Component } from 'react'
import { createUser } from "../store/entities/user/actions"

export default class Example extends Component {
  render() {
    return (
      <div>

        <br />
        <button onClick={createUser}> createUser </button>
        <br />
        <button> showUser </button>
        <br />
        <button> updateUser </button>
        <br />
        <button> deleteUser </button>
        <br />



      </div>
    )
  }
}

