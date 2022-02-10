import React, {useState, useEffect, useRef} from "react";

//images
import searchIcon from "../../images/search-icon.svg"

//styles
import { Wrapper, Content } from "./SearchBar.styles";


const SearchBar = ({ setSearchTerm }) =>{ 
    const [state, setState] = useState('');

    const initial = useRef(true);

    useEffect(() => {
        if(initial.current){
            initial.current = false;
            return;
        } // this check if page render for the first time, we dont change need to search anythng else below, skip initial render with searchTerm = '' below

        const timer = setTimeout(() => {
            setSearchTerm(state);
        }, 500);
        return () => clearTimeout(timer); // this return only run when component has finished render
    }, [setSearchTerm, state]);

    return (
        <Wrapper>
            <Content>
                <img src={searchIcon} alt='search-icon'/>
                <input 
                    type='text' 
                    placeholder="Search movies?"
                    onChange={event => setState(event.currentTarget.value)}
                    value={state}
                />
            </Content>
        </Wrapper>
    )
};

export default SearchBar;

