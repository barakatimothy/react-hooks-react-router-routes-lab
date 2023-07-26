import React from "react";
import { actors } from "../data";

function Actors(){
  const actorElements = actors.map((actor,index)=>{
   <div key={index}>
    <h2>{actor.name}</h2>
    <ul>
      {actor.movies.map((movie ,indx) =>{
        <li key={indx}>{movie}</li>
      })}
    </ul>
   </div>
   })
return(
  <div>
    <h1>Actors</h1>
    {actorElements}
  </div>
)
}
export default Actors;
