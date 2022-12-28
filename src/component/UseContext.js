import "./use.css"
import React,{ useContext,useEffect } from "react";
import { ToggleTheme, textTheme } from "../App";

function UseContext(){
  const theme = useContext(ToggleTheme);
  const themeStyle = {
    backgroundColor: theme?"black":"grey",
    color:theme?"grey":"black",
    padding:"5rem",
    margin:"2rem",
  }   

  const text = useContext(textTheme)
   const abd=
   text?"Adding multiple useState hook, inside UseState.js file. This component will be rendered inside App.js. The following piece of code displays as how multiple useState hooks can be used to update elements. Free feel to copy this code, and experiment around.":""

   useEffect(()=>{
    alert(`something changed`)
  },[abd])

  return(
    <div className="div" style={themeStyle}>
      <div className="abd">
        {abd}
      </div>
    </div>
  )
}

export default UseContext;
