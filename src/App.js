import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
 import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Atert';



function App() {
    const [mode,setMode]=useState('dark');
    const [alert,setAlert] =useState(null);
    const showAlert =(message,type)=>{
        setAlert({
            msg : message,
            type: type
        });
    };
    const toggleMode=()=>{
        if(mode === 'dark'){
            setMode('light');
            document.body.style.backgroundColor='white';
            showAlert('Light mode Has Enebaled','success');
            document.title='Sita Ram - light Mode';
        }else{
            setMode('dark');
            document.body.style.backgroundColor='black';
            showAlert('Dark mode Has Enebaled','success');
             document.title='Sita Ram - Dark Mode';
        }
    };
    return (
        <>
           {/* <Navbar /> */}
           <Navbar title="Sita Ram" mode={mode} toggleMode={toggleMode} />
           <Alert alert={alert}/>
           <div className="container my-3">
            <TextForm heading ="Enter to the text area" mode={mode} />  
            <About/>
           </div>
        </>

    );
}

export default App;
