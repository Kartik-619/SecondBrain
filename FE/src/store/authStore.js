import {create} from "zustand";
import axios from "axios";
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
                set({
                    user: res.data.user,
                    loggedIn: true,
                    loading: false
                });
            }else{
                set({
                    user: null,
                    loggedIn: false,
                    loading: false
                });
            }
        }catch(e){
            set({
                user: null,
                loggedIn: false,
                loading: false
            });
        }
    },
    setUser: (user) => set({
        user,
        loggedIn: true,
        loading: false
    }),

    logout:async()=>{
        try{
            await axios.post('http://localhost:3009/auth/logout',{},{
                withCredentials:true
            });

            set({
                user: null,
                loggedIn: false,
                loading: false
            });
        }catch(e){
            console.error(e);
        }
    }
})
);