import React from "react";
//style
import { Wrapper, Image } from "./Actor.styles";

const Actor = ({name, charater, imageUrl}) => (
    <Wrapper>
        <Image src={imageUrl} alt='actor-thumb'/>
        <h3>{name}</h3>
        <p>{charater}</p>
    </Wrapper>
);

export default Actor;