import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
function App() {
    return (
        <>
           {/* <Navbar /> */}
           <Navbar title="Sita Ram" />
           <div className="container my-3">
            <TextForm heading ="Enter to the text area"/>  
            <About/>
           </div>
        </>

    );
}

export default App;
