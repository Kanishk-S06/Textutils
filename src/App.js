import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React,{ useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode,setMode]=useState('dark');
  const [alert,setAlert]=useState(null)
  const showAlert=(message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
      
    }, 1500);
  }
  const toggleMode=()=>{
    if (mode === "light"){
      setMode("dark")
      document.body.style.backgroundColor="#232541";
      showAlert("Dark mode has been Enabled","Success") 
    }
    else{
      setMode("light")
      document.body.style.backgroundColor="white";
      showAlert("Light mode has been Enabled","Success")

    }
  }
  const toggleMode1=()=>{
      document.body.style.backgroundColor="#08031a";
      showAlert("Blue Dark mode has been Enabled","Success") 
  }

  const toggleMode2=()=>{
      document.body.style.backgroundColor="#2a0505";
      showAlert("Red Dark mode has been Enabled","Success") 
  }
  const toggleMode3=()=>{
      document.body.style.backgroundColor="#30062d";
      showAlert("Purple Dark mode has been Enabled","Success") 
  }
  const toggleMode4=()=>{
      document.body.style.backgroundColor="#082904";
      showAlert("Green Dark mode has been Enabled","Success") 
  }

  return (
    <>
    <Router>
    <Navbar title="Textutils" mode={mode} toggleMode={toggleMode} toggleMode1={toggleMode1} toggleMode2={toggleMode2} toggleMode3={toggleMode3} toggleMode4={toggleMode4}/>
    <Alert alert={alert}/>
    <div className='container my-2'>
    <Routes>
          <Route exact path="/about" element={<About mode={mode}/>}/>
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading =" Try Textutils - Word Counter ,Character Counter" mode={mode}/>}/>
    </Routes>   
    </div>
    </Router>
    </>
    );
}

export default App;
