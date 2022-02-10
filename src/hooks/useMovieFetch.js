import {useState, useEffect} from "react";
// API
import API from "../API";
import { isPersistedState } from "../helpers";

export const useMovieFetch = movieID => {
    const [state, setState] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchMovie = async () => {
            try {
                setLoading(true);
                setError(false);
                const movie = await API.fetchMovie(movieID);
                const credit = await API.fetchCredits(movieID);
                const director = credit.crew.filter(
                    member => member.job === 'Director'
                );

                setState({
                    ...movie
                    ,actor: credit.cast
                    ,director });
                setLoading(false);
            } catch (error) {
                setError(true);
            }
        }

        //check cached in session storage
        const sessionState = isPersistedState(movieID);
        if(sessionState){
            console.log("Grab movie detail on session storage");
            setState(sessionState);
            setLoading(false);
            return;
        }  
        
        console.log("Grab movie detail on API");
        fetchMovie();
    },[movieID]);
       
    useEffect(()=>{
        sessionStorage.setItem(movieID, JSON.stringify(state));
    },[movieID,state]);

    return {state, loading, error};
}

