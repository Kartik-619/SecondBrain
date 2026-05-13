import { useEffect, useState } from "react";
import API from "../../lib/axios";
import { useNavigate, useParams } from "react-router-dom";
import { useUserStore } from "../../store/authStore";

const MyPost = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const logout = useUserStore((state) => state.logout);

    const FetchAll = async () => {
        try {
            setLoading(true);

            const res = await API.get(
                "/api/myposts"
            );

            if (!res.data.success) {
                setData([]);
                return;
            }

            setData(res.data.data);

        } catch (e) {
            if (e.response?.status === 401) {
                await logout();
                navigate("/login");
            } else {
                console.error(e);
            }
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        FetchAll();
    }, []);

    return (
        <div className="min-h-screen bg-gray-100 p-6">

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

            
            {loading ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {[...Array(8)].map((_, i) => (
                        <div
                            key={i}
                            className="bg-white rounded-2xl shadow-md p-5 animate-pulse"
                        >
                            <div className="h-4 bg-gray-300 rounded w-3/4 mb-3"></div>
                            <div className="h-3 bg-gray-200 rounded w-full mb-2"></div>
                            <div className="h-3 bg-gray-200 rounded w-5/6 mb-2"></div>
                            <div className="h-3 bg-gray-200 rounded w-2/3 mb-4"></div>

                            <div className="h-3 bg-gray-200 rounded w-1/3 mt-4"></div>
                        </div>
                    ))}
                </div>
            ) : (
                <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

                        {data.map((i) => (
                            <div
                                key={i.id}
                                onClick={() => navigate(`/post/${i.id}`)} 
                                className="bg-white rounded-2xl shadow-md p-5 hover:shadow-lg transition duration-300 flex flex-col justify-between"
                            >
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                                    {i.title}
                                </h3>

                                {i.message && (
                                    <p className="text-sm text-gray-600 mb-3 line-clamp-3">
                                        {i.message}
                                    </p>
                                )}

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

                    {!loading && data.length === 0 && (
                        <div className="text-center mt-10 text-gray-500">
                            No posts found. Start by creating one 🚀
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default MyPost;