import { Component } from "react";
import { BackdropWrapper } from "./Backdrop.staled";

class Backdrop extends Component {
  render() {
    return (
      <BackdropWrapper
        className="backdrop"
        onMouseDown={this.props.handleClick}
        data-name="backdrop"
      >
        {this.props.children}
      </BackdropWrapper>
    );
  }
}

export { Backdrop };
