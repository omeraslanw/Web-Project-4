import React, { Component} from 'react'

export default class fahrenheit extends Component {
  render() {
    return (
      <div>
        <h3>Fahrenheit: {this.props.fahrenheit}</h3>
      </div>

    )
  }
}
