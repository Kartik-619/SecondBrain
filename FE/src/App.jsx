import { BrowserRouter, Route, Routes } from 'react-router-dom'
import InputCard from './Component/inputCard'
import NavBar from './Component/Navbar'
import Home from './Pages/Home/Home'

function App() {
  return (
    <div className="min-h-screen w-screen bg-neutral-700">
      <NavBar />
    
      <Routes>
      <Route path={'/'} element={<Home/>}/>
    {/*<Route to={'/login'} element={<Login/>}/>
      //<Route to={'/register'} element={<Register/>}/>*/}
      </Routes>
     
    </div>
  )
}

export default App