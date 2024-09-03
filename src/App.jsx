import { useState } from 'react'
import './css/App.css'
import React from 'react';
import { NavBar } from './components/navBar';
import { TextoUm } from './components/textos';
import { ButtonUm } from './components/buttons';
import { CaixaUm } from './components/AnimationBox';

function App() {

  return (
    <>
      <NavBar/>
      <div>
        <TextoUm/>
        <ButtonUm/>
      </div>
      <CaixaUm/>
    </>
  )
}

export default App
