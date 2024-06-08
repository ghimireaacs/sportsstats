

import './App.css'
import Leagues from './Pages/Leagues/Leaguespage'
import Navmenu from './components/Navbar/Navbar'

function App() {


  return (
    <>
      <Navmenu />
      <div className=' flex-auto w-auto'>
      <Leagues />
      <p>Hello</p>
      </div>
      
    </>
  )
}

export default App
