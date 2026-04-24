import { useNavigate } from "react-router-dom"
export default function Home(){
    const navigate=useNavigate();
    const LoginOpen=()=>{
        navigate("/login");
    }
    const RegisterOpen=()=>{
        navigate("/register");
    }
    return(
        <div className="w-screen flex bg-white h-screen justify-center item-center">
            <h1 className="text-black ">Welcome to Second Brain</h1>
            
                <div>
                    <h3 className="flex item-center text-black">
                        Second Brain is here to keep a hold of your data, wheather keep it as your personal diary or save your Idea.
                    </h3>
                </div>
            <div className="flex item-center bg-gray-500 space-between">
                <button className="p-3 text-black"  onClick={LoginOpen}>Login</button>
                <button className="p-3 text-black" onClick={RegisterOpen}>Register</button>

            </div>

        </div>
    )
}