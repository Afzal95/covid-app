import React, { useEffect, useState } from "react";
import './App.css';
import { Todo } from "./Components/Todo";

function App() {
 
  return (                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
    <div className="App">
    <h1 className="Apph1">Covid Vaccination Center Details & Registeration </h1>
    <p>
    <ul style={{listStyleType:"none",color:"yellowgreen"}}>
      <li>
        1-enter your correct pincode.
      </li>
      <li>
        2-enter date for when you want to check availablity.<br/>and then click on search button.
      </li>
      </ul>
    </p>
    <Todo />
    <p style={{position:"fixed",bottom:"10px",marginLeft:"75%"}}>created by : <a style={{textDecoration:"none"}} href="https://afzal95.github.io/my_site/" target="_blank">Afzal Ahmad</a></p>
    </div>
  );
}

export default App;


// import './App.css';
// import Form from './Components/Form';

// const form1 = (e) =>{
//   e.preventDefault()
//   console.log("Form1")
// }
// const form2 = (e) => {
//   e.preventDefault()
//   console.log("Form2")
// }

// function App() {
//   return  <div>
//    <Form onSubmit={form1}>
//     <input type="text" placeholder="email"/>
//     <input type="text" placeholder="password"/>
//     <input type="submit" placeholder="password"/>
  
//   </Form>

//    <Form onSubmit={form2}>
//     <input type="text" placeholder="email"/>
// <input type="text" placeholder="password"/>
// <input type="submit" placeholder="password"/>

//  </Form>
  
//  </div>
// }

// export default App;