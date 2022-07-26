import React from "react";
import Actor from "../Actor";
import "./style.css";

const Movie = ({ title, poster, year, rating, director, genre, cast }) => {
  return (
    <div className="movie">
      <h2 className="movie__title">{title}</h2>
      <div className="movie__container">
        <div>
          <img
            className="movie__poster"
            src={`/assets/${poster}`}
            alt={poster}
          />
        </div>
        <div className="movie__info">
          <p className="movie__year">
            <span className="bold_text">Release: </span>
            {year}
          </p>
          <p className="movie__genre">
            <span className="bold_text">Genre:</span> {genre}
          </p>
          <p className="movie__director">
            <span className="bold_text">Directed by:</span> {director}
          </p>
          <p className="movie__rating">
            <span className="bold_text">Rating:</span> {rating}/10
          </p>
          <h4> Starring</h4>
          <div className="movie__cast">
            {cast.map((actor) => (
              <Actor name={actor.name} as={actor.as} key={actor.name} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
