import React from "react";
import Movie from "../Movie";
import './style.css';

const MovieList = ({ movies }) => {
    return (
        <div className="movie__list">
            
                {movies.map(movie =>
                    <Movie
                        key={movie.id}
                        title={movie.title}
                        poster={movie.poster}
                        year={movie.year}
                        rating={movie.rating}
                        genre={movie.genre}
                        director={movie.director}
                        cast={movie.cast}
                    />
                )}
         
        </div>

    )
}


export default MovieList;

//zacalo to fungovat po pridani chlupatych zavorek u prop movies...Proc? Kdyz je to jen jedno prop; 