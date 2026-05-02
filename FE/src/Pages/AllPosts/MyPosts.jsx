import { useEffect,useState } from "react"
import axios from "axios"

export default MyPost=()=>{

    const FetchAll=async()=>{
        try{
            const res=await axios.get('http://localhost:3009/api/')
        }catch(e){

        }
    }

    useEffect(()=>{
        
    })
    return(
        <div>

        </div>
    )
}