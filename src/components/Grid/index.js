import React from "react";

//style
import { Content, Wrapper } from "./Grid.styles";

const Grid = ({header, children}) => (
    <Wrapper>
        <h1>{header}</h1>
        <Content>{children}</Content>
    </Wrapper>
)

export default Grid;
