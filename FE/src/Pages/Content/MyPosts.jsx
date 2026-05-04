import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const MyPost = () => {
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    const FetchAll = async () => {
        try {
            const res = await axios.get('http://localhost:3009/api/');

            if (!res.data.success) return;

            setData(res.data.data);

        } catch (e) {
            console.error(e);
        }
    };

    useEffect(() => {
        FetchAll();
    }, []);

    return (
        <div className="min-h-screen bg-gray-100 p-6">

            {/* 🔷 Header */}
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold text-gray-800">
                    My Posts
                </h1>

                <button
                    onClick={() => navigate("/createpost")}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition"
                >
                    + Create Post
                </button>
            </div>

            {/* 🔷 Grid Layout (4 per row) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

                {data.map((i, k) => (
                    <div
                        key={k}
                        className="bg-white rounded-2xl shadow-md p-5 hover:shadow-lg transition duration-300 flex flex-col justify-between"
                    >
                        {/* Title */}
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">
                            {i.title}
                        </h3>

                        {/* Message */}
                        {i.message && (
                            <p className="text-sm text-gray-600 mb-3 line-clamp-3">
                                {i.message}
                            </p>
                        )}

                        {/* URL */}
                        {i.url && (
                            <a
                                href={i.url}
                                target="_blank"
                                rel="noreferrer"
                                className="text-blue-500 text-sm hover:underline mb-3"
                            >
                                🔗 View Resource
                            </a>
                        )}

                        {/* Footer */}
                        <div className="mt-auto pt-3 border-t text-xs text-gray-400 flex justify-between items-center">
                            <span>
                                {i.createdAt
                                    ? new Date(i.createdAt).toLocaleDateString()
                                    : "No Date"}
                            </span>

                            <span className="text-gray-500">
                                #{i.id}
                            </span>
                        </div>
                    </div>
                ))}

            </div>

            {/* Empty State */}
            {data.length === 0 && (
                <div className="text-center mt-10 text-gray-500">
                    No posts found. Start by creating one 
                </div>
            )}
        </div>
    );
};

export default MyPost;