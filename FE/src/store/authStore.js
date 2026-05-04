import {create} from "zustand";

export const useUserStore=create((set)=>({
    user:null,
    loggedIn:false,
    loading:true,

    checkAuth:async()=>{
        try{
            const res= await axios.get(
                "http://localhost:3009/api/check-auth"
            ,{withCredentials:true});
            if(res.data.success){
                set({user:res.data.user});
                set({loggedIn:true});
            }
        }catch(e){
            set({user:null});
            set({loading:false})
        }
    }
})
);