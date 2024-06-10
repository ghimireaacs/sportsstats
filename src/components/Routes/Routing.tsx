import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

import App from '@/App'
import About from './../../Pages/About'

interface Routing {
    
}
const Routing:React.FC<Routing> = () =>{
    return(
        <>
            <Routes>
                <Route path='/' element={<App />} />
                <Route path='/about' element={<About />} />
            </Routes>


        </>
    )
}

export default Routing