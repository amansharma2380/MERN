import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./Header"; 
import Home from "./components/Home";
import Login from "./components/Login";
function App(){
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route index element={<Home/>}/>
      <Route path="/" element={<Home/>}/>
      <Route path="/Login" element={<Login/>}/>

    </Routes>
    
    </BrowserRouter>


  );
}
export default App;
