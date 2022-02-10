import React from "react";
import { Link } from "react-router-dom";

//styles
import { Image } from "./Thumb.styles";

const Thumb = ({image, movieID, clickable}) => (
    <div>
        {clickable ? (
            <Link to={`/${movieID}`}>
                 <Image src={image} alt='thumb-images'/>
            </Link>
        ) : (
            <Image src={image} alt='thumb-images'/>
        )}
    </div>
);

export default Thumb;