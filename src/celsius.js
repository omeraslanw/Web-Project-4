import React, { Component } from 'react'

export default class celsius extends Component {
 
  render() {
    return (
      <div>
        <h3>Celsius: {this.props.celsius}</h3>
      </div>
    )
  }
}
