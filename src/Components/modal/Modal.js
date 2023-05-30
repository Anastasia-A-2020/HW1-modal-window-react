import { Component } from "react";
import Button from "../button";
import { Container, Inner } from "./Modal.styled";

class Modal extends Component {
  render() {
    return (
      <Container>
        <Inner>
          <p>{this.props.header}</p>
          {this.props.closeButton && (
            <Button
              text="x"
              bgColor="#000"
              handleClick={this.props.callBackFunction}
            />
          )}
        </Inner>

        <p>{this.props.text}</p>
        {this.props.actions}
      </Container>
    );
  }
}

export { Modal };
