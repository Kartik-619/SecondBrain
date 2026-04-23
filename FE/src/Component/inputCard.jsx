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
        <div className="min-h-[100vh] flex items-center justify-center px-4 py-10">
            
            <div className="w-full max-w-xl bg-white rounded-2xl shadow-xl p-8 space-y-6">

                {/* Heading */}
                <div className="space-y-1">
                    <h2 className="text-2xl font-bold text-black">
                        Create Post
                    </h2>
                    <p className="text-sm text-black">
                        Share something meaningful
                    </p>
                </div>

                {/* Form */}
                <form className="space-y-5" onSubmit={SubmitMessage}>
                    
                    {/* Title */}
                    <div className="space-y-1.5">
                        <label className="text-sm font-medium text-gray-700">
                            Title
                        </label>
                        <input 
                            type="text"
                            placeholder="Enter your title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                            required
                        />
                    </div>
                    
                    {/* Message */}
                    <div className="space-y-1.5">
                        <label className="text-sm font-medium text-gray-700">
                            Message
                        </label>
                        <textarea
                            placeholder="Write your post content here..."
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none transition"
                            rows="4"
                            required
                        />
                    </div>
                    
                    {/* Button */}
                    <button 
                        className="w-full bg-blue-600 hover:bg-blue-700 active:scale-[0.99] text-white font-semibold py-2.5 rounded-lg transition-all duration-150 shadow-md hover:shadow-lg"
                        type="submit"
                    >
                        Publish Post
                    </button>

                </form>
            </div>
        </div>
    )
}