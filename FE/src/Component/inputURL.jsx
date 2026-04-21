import React, { useState } from "react";

export default function InputCard() {
    const [message, setMessage] = useState('');
    const [title, setTitle] = useState('');
    const authorId = '123456';
    
    const SubmitMessage = async (e) => {
        e.preventDefault();
        try {
            const data = await fetch('http://localhost:3009/api/writePost', {
                headers: { 
                    "Content-Type": "application/json"
                },
                method: "POST",
                body: JSON.stringify({ title, message, authorId })
            });

            if (!data.ok) {
                return console.error('cannot fetch data');
            }

            const response = await data.json();
            console.log("post saved", response);

            setTitle('');
            setMessage('');
        } catch (e) {
            console.error(e);
        }
    }
    
    return (
        <div className="min-h-screen bg-black flex items-center justify-center p-4">
            
            {/* Outer White Container */}
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg p-8">

            <h2 className="text-3xl font-extrabold text-black mb-6 text-center tracking-tight">                    Create a Post
                </h2>

                {/* Inner Small Card */}
                    
                    <form className="space-y-4" onSubmit={SubmitMessage}>
                        
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Title
                            </label>
                            <input 
                                type="text"
                                placeholder="Enter your title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>
                        
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                               URL
                            </label>
                            <textarea
                                placeholder="Write your post content here..."
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                                rows="2"
                                required
                            />
                        </div>
                        //make description i/p field
                        <button 
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-200"
                            type="submit"
                        >
                            Save URL
                        </button>

                    </form>
              
            </div>
        </div>
    )
}