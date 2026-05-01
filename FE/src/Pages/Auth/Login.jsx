import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login,setLogin]=useState(false);
  const naviagte=useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3009/auth/login', {
        email,
        password,
      });

      setLogin(true);
      if(res.data.success){
        alert("Login Successful")
        navigate('/');
      }

      console.log(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900">
      <div className="w-full max-w-md p-8 rounded-2xl bg-white backdrop-blur-xl border border-neutral-700 shadow-2xl">
        
        <h2 className="text-2xl font-semibold text-black text-center mb-6">
          Welcome Back
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-4 py-3 rounded-lg bg-neutral-900 text-white border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="px-4 py-3 rounded-lg bg-neutral-900 text-white border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          />

          <button
            type="submit"
            className="mt-2 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition-all duration-200 shadow-lg hover:shadow-indigo-500/30"
          >
            Login
          </button>

        </form>

        <p className="text-sm text-neutral-900 text-center mt-6">
          Don’t have an account? <span className="text-indigo-400 cursor-pointer">Sign up</span>
        </p>

      </div>
    </div>
  );
}