import React from "react";
import {FormEvent,useState} from "react";

export default function InputCard() {
    const [message,setMessage]=useState('');
    const [title,setTitle]=useState('');
    const authorId='123456';
    const SubmitMessage = async (e) => {
        e.preventDefault();
        try {
            const data = await fetch('http://localhost:3009/api/writePost', {

                headers: { 
                    "Content-Type": "application/json"
                    , },
                method: "POST",
                body:JSON.stringify({title,message,authorId})

            });
            if(!data.ok){
                return console.error('cannnot fetch data');
            }
            const response=await data.json();
            console.log("post saved",response);
           
        } catch (e) {
            console.error(e);
        }
    }
    return (
        <div className="w-screen h-full ">
            <form className="p-3 w-64 h-64" onSubmit={SubmitMessage}>
                <input 
                type="text"
                placeholder="write your post"
                value={message}
                onChange={(e)=>setMessage(e.target.value)}
                />
                  <input 
                type="text"
                placeholder="title"
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
                />
                <button className="w-16 h-16" type="submit"> Save Post</button>
            </form>
        </div>)
}