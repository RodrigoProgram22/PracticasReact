// import { useState } from "react";
// import "./App.css";

// function App() {
//   let user = "Ezequiel Rodrigo";
//   const [count, setCount] = useState(0);
//   const handleClickMas=()=>{
//     setCount(count+1);
//   }
//   const handleClickMenos=()=>{
//     setCount(count-1);
//   }
//   return (
//     <>
//     <div className="container">
//       <h1 >Hola {user}</h1>
//       <h2>Count {count}</h2>
//       <button className="button" onClick={handleClickMas}>+</button>
//       <button className="button" onClick={handleClickMenos}>-</button>
//     </div>
//     </>
//   );
// }
// export default App;

import React from "react";
import "./App.css";
import { Box, ChakraProvider } from "@chakra-ui/react";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/Navbar";
import TaskList from "./components/TaskList";
const App = () => {
  return (
      <TaskList></TaskList>
  );
};
export default App;
