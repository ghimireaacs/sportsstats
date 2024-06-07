

import './App.css'
import Leagues from './Pages/Leagues/Leaguespage'
import Navmenu from './components/Navbar/Navbar'

function App() {


  return (
    <>
      <Navmenu />
      <div className=' grid bg-gray-200'>
      <Leagues />
      <p>Hello</p>
      </div>
      
    </>
  )
}

export default App
