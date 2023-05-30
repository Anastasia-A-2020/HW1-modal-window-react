import React from "react";
import Button from "../button";
import { Container } from "./Action.styled";

const Action = () => {
    return (
        <Container>
             <Button
                bgColor="blue"
                text="Ok"
                handleClick={() => alert("ok")}
              />
                 <Button
                bgColor="red"
                text="Cancel"
                handleClick={() => alert("ok")}
              />
        </Container>
    )
}


export  {Action}