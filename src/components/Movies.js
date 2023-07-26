import React from "react";
import { directors, movies } from "../data";

function Movies() {
 const movieElements = movies.map((movie ,index) => {
    <div key={index}>
     <h2>{movie.title}</h2>
     <ul>
        <li>{movie.time}</li>
        {movie.genres.map((genre ,i)=> {
         <li key={i}>{genre}</li>
        })}
     </ul>
    </div>
 })
return(
    <div>
      <h1>Movies!</h1>
      {movieElements}
    </div>
)
}
export default Movies;
