import React from 'react'
import GlobalStyle from './components/GlobalStyles';
import Navbar from './components/NavBar'
import Greting from './components/Greeting'
import './App.css'

function App() {
  let title = "Titulo del hero";
  return <>
    <GlobalStyle />
    <Navbar />
    <Greting title={title}/>
  </>
}

export default App
