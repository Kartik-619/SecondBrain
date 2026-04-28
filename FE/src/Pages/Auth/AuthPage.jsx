import { useState } from "react";

function AuthPage({isSignin}){
    const router=useRouter();
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [name,setName]=useState('');
    const [loading,setLoading]=useState(false);
    
    async function handleAuth(){
        
        if(!email||!password (!isSignin && !name)){
            return;
        }

        try{
            const endpoint=isSignin ?"signin":"so"
        }catch(e){

        }
    }
    return(
        <div>
            <main>
                <form>
                    <input placeholder="username"/>
                    <input placeholder="password"/>
                    <button type="submit">Submit</button>
                </form>
            </main>
        </div>
    )
}
export default AuthPage;