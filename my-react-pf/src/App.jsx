// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import './App.css';

function App() {
  return (
    <div className='App'>
     <div> 
      <Header />
      <Home /> 
     
     </div>
     
    </div>
  );
}

export default App;