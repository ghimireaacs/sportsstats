

import './App.css'

import {Route, Routes} from "react-router-dom"

import Leagues from './Pages/Leagues/Leaguespage'
import Navmenu from './components/Navbar/Navbar'
import About from './Pages/About'
import Competitions from './Pages/Competitions/Competition'

function App() {


  return (
    <>
    <div className=' flex-auto w-auto'>
      <Navmenu />

      <Routes>
        
        <Route path='/' element={<Leagues />} />
        <Route path='/about' element={<About />} />
        <Route path='/leagues' element={<Leagues />} />
        <Route path='/leagues/:id' element={<Competitions />} />
        {/* <Route path='/leagues/:id' element={<Leagues />} /> */}

      </Routes>
      </div>
    </>
  )
}

export default App
