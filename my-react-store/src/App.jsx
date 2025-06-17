
import { BrowserRouter, Routes, Rout} from "react-router-dom";
import Header from "./Header"; 
function App(){
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route index element={<Home/>}/>
      <Rout path="/" element={<Home/>}/>
      <Rout path="/Login" element={<Login/>}/>

    </Routes>
    
    </BrowserRouter>


  );
}
export default App;
