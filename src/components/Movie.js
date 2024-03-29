import React from "react";
import { useParams } from "react-router-dom";
//config
import { IMAGE_BASE_URL, POSTER_SIZE } from "../config";
//components
import Grid from "./Grid";
import Spinner from "./Spinner";
import BreadCrumb from "./BreadCrumb";
import MovieInfo from "./MovieInfo";
import MovieInfoBar from "./MovieInfoBar";
import Actor from "./Actor";
//hook
import { useMovieFetch } from "../hooks/useMovieFetch";
//Image
import NoImage from '../images/no_image.jpg';


const Movie = () => {
    const {movieID} = useParams();
    const {state : movie, loading, error} = useMovieFetch(movieID);
    if(loading) return <Spinner />
    if(error) return <div>Something went wrong...</div>
    console.log(movie);
    return (
    <>
        <BreadCrumb movieTile={movie.original_title} />
        <MovieInfo movie={movie} />
        <MovieInfoBar 
            time={movie.runtime} 
            budget={movie.budget}
            revenue={movie.revenue}
        />
        <Grid header='Actor'>
            {movie.actor?.map(actor => (
                <Actor 
                    key={actor.credit_id}
                    name={actor.name}
                    charater={actor.charater}
                    imageUrl={
                        actor.profile_path 
                        ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
                        : NoImage
                    }
                />
            ))}
        </Grid>
    </>
    )
};

export default Movie;