import { Component } from "react";
import { Btn } from "./Button.styled";
import { Modal } from "../modal";

class Button extends Component {
  state = {
    show: false,
  };
  render() {
    return (
      <div>
        <Btn
          type="button"
          style={{ backgroundColor: this.props.bgColor }}
          onClick={this.props.handleClick}
        >
          {this.props.text}
        </Btn>
        {this.state.show && <Modal />}
      </div>
    );
  }
}

export { Button };
