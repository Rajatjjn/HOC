import React from "react";
import "./style.css";

export default function HOF(Component) {
  const sample={
    name:"rajat",
    role:"frontend developer",
    company:"PropVivo"

  }
  return ()=><Component value={sample}/>
}