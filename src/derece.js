import React, { Component, Button } from "react";

export default class derece extends Component {
  render() {
    return (
      <div>
        <h1>Şu Anki Sıcaklık(Celsius): {this.props.celsius}</h1>
        
        <Button onClick={() => this.props.sicaklikArtir()}>Sıcaklığı Artır</Button>
        <Button onClick={() => this.props.sicaklikAzalt()}>Sıcaklığı Azalt</Button>

      </div>
    );
  }
}
