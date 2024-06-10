

import './App.css'

import {Route, Routes} from "react-router-dom"

import Leagues from './Pages/Leagues/Leaguespage'
import Navmenu from './components/Navbar/Navbar'
import About from './Pages/About'

function App() {


  return (
    <>
    <div className=' flex-auto w-auto'>
      <Navmenu />
      <Routes>
        
        <Route path='/' element={<Leagues />} />
        <Route path='/about' element={<About />} />

      
      </Routes>
      </div>
    </>
  )
}

export default App
