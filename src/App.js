import React from "react";
import "./style.css";
import HOF from "./HOF"

function App({value}) {
  console.log(value)
  return (
    <div>
 <h1>hlo</h1>
 <h2>{value.name}</h2>
    </div>
  );
}
export default HOF(App)
//wrapping our component within hoc