import React, { Component } from "react";
import Celsius from "./celsius";
import Fahrenheit from "./fahrenheit";
import Kelvin from "./kelvin";
import Derece from "./derece";
import { Container, Row, Col } from "reactstrap";

class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
          celsius: 0,
    };
  }
  sicaklikArtir() {
    this.setState({celsius: this.state.celsius + 1})  ;
  };
  sicaklikAzalt() {
    this.setState({celsius: this.state.celsius - 1})  ;
  };

  render() {
  
     let celsius = this.state.celsius;
     let kelvin = this.state.celsius + 273.15;
     let fahrenheit = this.state.celsius * 9/5+32;
    return (
      <div>
        <Container>
          <Row>
            <Col xs="12">
              <Derece 
                sicaklikArtir = {this.sicaklikArtir}
                sicaklikAzalt = {this.sicaklikAzalt}
                celsius = {this.celsius} />
            </Col>
          </Row>
          <Row>
            <Col xs="4">
              <Celsius celsius={celsius} />
            </Col>
            <Col xs="4">
              <Kelvin kelvin={kelvin} />
            </Col>
            <Col xs="4">
              <Fahrenheit fahrenheit={fahrenheit} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
