import { Component } from "react";

import Button from "./Components/button";
import { Modal } from "./Components/modal";
import { Action } from "./Components/actions";
import { Wrapper } from "./App.styled";
import { Backdrop } from "./Components/backdrop/Backdrop";

class App extends Component {
  state = {
    showFirstModal: false,
    showSecondModal: false,
  };

  showFirstModal = () => {
    this.setState(prevState => {
      return { showFirstModal: !prevState.showFirstModal };
    });
  };
  showSecondModal = () => {
    this.setState(prevState => {
      return { showSecondModal: !prevState.showSecondModal };
    });
  };
  render() {
    return (
      <>
        <Wrapper>
          <Button
            text="Open first Modal"
            bgColor="teal"
            handleClick={this.showFirstModal}
          />
          <Button
            text="Open second modal"
            bgColor="brown"
            handleClick={this.showSecondModal}
          />
        </Wrapper>
        {this.state.showFirstModal && (
          <Backdrop handleClick={this.showFirstModal}>
            <Modal
              header="Do you want to delete this file?"
              closeButton={true}
              text="Once you delete this file, it won't be possible to undo this action."
              callBackFunction={this.showFirstModal}
            />
          </Backdrop>
        )}
        ;
        {this.state.showSecondModal && (
          <Backdrop handleClick={this.showSecondModal}>
            <Modal
              header="Do you want to save this file?"
              closeButton={false}
              text="Once you save this file, you will have access to it any time. Are you sure you want to save it?"
              actions={<Action handleClick={this.showSecondModal} />}
              callBackFunction={this.showSecondModal}
            />
          </Backdrop>
        )}
      </>
    );
  }
}

export default App;
