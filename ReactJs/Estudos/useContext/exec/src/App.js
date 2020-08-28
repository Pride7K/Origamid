import React from 'react';
import './App.css';
import { GlobalStorage } from "./GlobalContext/GlobalContext"
import Produtos from "./Produtos/Produtos"


function App() {
  return (
    <div className="App">
      <GlobalStorage>
        <Produtos />
      </GlobalStorage>
    </div>
  );
}

export default App;
