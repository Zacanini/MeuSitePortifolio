import { useState } from 'react'
import './css/App.css'
import React from 'react';
import { NavBar } from './components/navBar';
import { TextoUm } from './components/textos';
import { CaixaUm } from './components/AnimationBox';
import { ReadMe } from './components/ReadMe';
import { DivSkills } from './components/skils';
import { Projects } from './components/Projects';
import { BoxMidialLinks } from './components/RedesSociais';
import DownloadButton from './components/DownloadButton';



function App() {

  return (
    <>
      <NavBar/>
      <div id="home">
        <TextoUm />
        <DownloadButton fileName="dist/images/CurrículoMatheusZacanini(2025-1).pdf" label="Baixar Curriculo" />
        <BoxMidialLinks />
        <CaixaUm />
      </div>
      <ReadMe/>
      <DivSkills/>
      <Projects/>
      <h1 style={{fontFamily:"'Roboto', sans-serif", textAlign:"center" , fontSize:20 , marginTop:50}}>© Matheus Zacanini</h1>
    </>
  )
}

export default App
