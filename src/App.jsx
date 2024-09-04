import { useState } from 'react'
import './css/App.css'
import React from 'react';
import { NavBar } from './components/navBar';
import { TextoUm } from './components/textos';
import { CaixaUm } from './components/AnimationBox';
import { ReadMe } from './components/ReadMe';
import { DivSkills } from './components/skils';
import { Projects } from './components/Projects';
import DownloadButton from './components/DownloadButton';


function App() {

  return (
    <>
      <NavBar/>
      <div id="home">
        <TextoUm/>
        <DownloadButton fileName="./images/Curriculo_Matheus_2024.pdf" label="Baixar Curriculo" />
        <CaixaUm/>
      </div>
      <ReadMe/>
      <DivSkills/>
      <Projects/>
      <h1 style={{fontFamily:"'Roboto', sans-serif", textAlign:"center" , fontSize:20 , marginTop:50}}>© Matheus Zacanini</h1>
    </>
  )
}

export default App
