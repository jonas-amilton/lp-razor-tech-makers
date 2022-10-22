import React from "react";
import "./App.css";
import Header from './components/Header.jsx';
import Principal from './components/Principal.jsx';
import FichaTecnica from './components/FichaTecnica.jsx';

function App() {
  return (
    <div className="App">
      <Header/> 
      <Principal/>
      
      <main>
       <FichaTecnica/>
        
      </main>
    </div>
  );
}

export default App;
