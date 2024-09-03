import { useState } from 'react'
import './css/App.css'
import React from 'react';
import { NavBar } from './components/navBar';
import { TextoUm } from './components/textos';
import { CaixaUm } from './components/AnimationBox';
import { ReadMe } from './components/ReadMe';
import { DivSkills } from './components/skils';


function App() {

  return (
    <>
      <NavBar/>
      <div>
        <TextoUm/>
        <CaixaUm/>
      </div>
      <ReadMe/>
      <DivSkills/>
    </>
  )
}

export default App
