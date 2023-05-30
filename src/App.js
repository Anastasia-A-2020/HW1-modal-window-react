import { Component } from "react";

import Button from "./Components/button";
import { Modal } from "./Components/modal";
import { Action } from "./Components/actions";
import { Wrapper } from "./App.styled";

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
          <Wrapper>
            <Modal
              header="Do you want to delete this file?"
              closeButton={true}
              text="Once you delete this file, it won't be possible to undo this action. Are you sure you want to delete it?"
              actions=""
              callBackFunction={this.showFirstModal}
            />
          </Wrapper>
        )}
        ;
        {this.state.showSecondModal && (
          <Wrapper>
            <Modal
              header="Do you want to save this file?"
              closeButton={false}
              text="Once you save this file, you will have access to it any time. Are you sure you want to save it?"
              actions={<Action />}
              callBackFunction={this.showSecondModal}
            />
          </Wrapper>
        )}
      </>
    );
  }
}

export default App;
