import React from "react";
import Button from "../button";
import { Container } from "./Action.styled";

const Action = (props) => {
    return (
        <Container>
             <Button
                bgColor="blue"
                text="Ok"
                handleClick={props.handleClick}
              />
                 <Button
                bgColor="red"
                text="Cancel"
                handleClick={props.handleClick}
              />
        </Container>
    )
}


export  {Action}