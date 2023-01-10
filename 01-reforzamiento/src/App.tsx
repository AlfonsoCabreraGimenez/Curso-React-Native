import React from 'react';
import './App.css';
import TiposBasico from "./typescript/TiposBasico";
import {Usuarios} from "./components/Usuarios";
import {Login} from "./components/Login";
import {Formularios} from "./components/Formularios";
//import {Login} from "./components/Login"

const App = () => {
  return (
    <div className="mt-2">
  <h1>Introducción a ts-typescript</h1>
        <hr/>
      <Formularios />
    </div>
  );
}

export default App;
