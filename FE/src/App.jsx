import InputCard from './Component/inputCard'
import NavBar from './Component/Navbar'
import Home from './Pages/Home/Home'

function App() {
  return (
    <div className="min-h-screen w-screen bg-neutral-700">
      <NavBar />
      <Home/>
    </div>
  )
}

export default App