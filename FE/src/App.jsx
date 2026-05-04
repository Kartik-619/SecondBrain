import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './Component/Navbar'
import Home from './Pages/Home/Home'
import Login from './Pages/Auth/Login'
import Register from './Pages/Auth/Register'
import MyPost from './Pages/Content/MyPosts'
import InputCard from './Component/inputURL'
import { useUserStore } from './store/authStore'
import { useEffect } from 'react'

function App() {
  const checkAuth = useAuthStore((state) => state.checkAuth);

  useEffect(()=>{
    checkAuth();
  },[]);
  return (
    <div className="min-h-screen w-screen bg-neutral-700">
      <NavBar />
    
      <Routes>
      <Route path={'/'} element={<Home/>}/>
      <Route path={'/login'} element={<Login/>}/>
      <Route path={'/register'} element={<Register/>}/>
      <Route path={'/myposts'} element={<MyPost/>}/>
      <Route path={'/createpost'} element={<InputCard/>}/>
      </Routes>
     
    </div>
  )
}

export default App