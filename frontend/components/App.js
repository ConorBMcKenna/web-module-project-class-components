import React from 'react'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>TODOS</h1>
        <ul>
          <li>Go to the Gym</li>
          <li>Do your Homework</li>
          <li>Pay your Bills</li>
        </ul>

        <form>
          <input/>
          <button>Add</button>
        </form>
        <button>Clear</button>

      </div>
    )
  }
}
