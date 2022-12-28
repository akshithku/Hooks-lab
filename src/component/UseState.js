// import React, { useState,useContext } from "react";
// import { useEffect } from "react";
// import { ToggleTheme } from "../App";
// function UseState(){
//   const user=useContext(ToggleTheme)
//   const [currAge, setAge] = useState(19);
//   const [currSib, setSib] = useState(3);

//   useEffect(()=>{
//     alert(`something changed ${currAge}`)
//   },[currAge])

//   return(
//     <ToggleTheme.Consumer>
//     <div>
//       <h3>My Current Age is {currAge}</h3>
//       <h4>My siblings {currSib}</h4>
//     {user}
//       <button onClick={()=>setAge(currAge=>currAge+1)}>age</button>
//       <button onClick={()=>setSib(currSib=>currSib+1)}>sib</button>
//     </div>
//     </ToggleTheme.Consumer>
//   )

// }


// export default UseState;
