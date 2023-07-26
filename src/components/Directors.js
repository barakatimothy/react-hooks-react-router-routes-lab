import React from "react";
import { directors } from "../data";
function Directors(){
const directorElements = directors.map((director , index)=>{
    <div key={index}>
          <h2>{director.name}</h2>
      <ul>
          {director.movies.map((movie , indx) =>
          <li key ={indx}>{movie}</li>
          )}
      </ul>
      </div>
  })
return (
  <div>
    <h1> Directors page</h1>
    {directorElements}
  </div>
)
}
export default Directors;