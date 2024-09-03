import { useState } from 'react'
import './css/App.css'
import React from 'react';
import { NavBar } from './components/navBar';
import { TextoUm } from './components/textos';
import { CaixaUm } from './components/AnimationBox';
import { ReadMe } from './components/ReadMe';


function App() {

  return (
    <>
      <NavBar/>
      <div>
        <TextoUm/>
        <CaixaUm/>
      </div>
      
      <ReadMe/>
    </>
  )
}

export default App
