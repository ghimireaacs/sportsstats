import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter, Routes } from 'react-router-dom'
import Routing from './components/Routes/Routing.tsx'
import Navmenu from './components/Navbar/Navbar.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routing />
    
    {/* <App /> */}
    </BrowserRouter>
  </React.StrictMode>,
)
