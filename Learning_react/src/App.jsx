import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";

function App() {
  const [count, setCount] = useState(0)

  return (<>
<Header/>
<Home name = "Aman"  age = "6" />
<Footer/>
  </>
  );
}

export default App
