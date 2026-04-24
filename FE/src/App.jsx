import { BrowserRouter, Route, Routes } from 'react-router-dom'
import InputCard from './Component/inputCard'
import NavBar from './Component/Navbar'
import Home from './Pages/Home/Home'

function App() {
  return (
    <div className="min-h-screen w-screen bg-neutral-700">
      <NavBar />
      <BrowserRouter>
      <Routes>
      <Route to={'/'} element={<Home/>}/>
      <Route to={'/login'} element={<Login/>}/>
      <Route to={'/register'} element={<Register/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App