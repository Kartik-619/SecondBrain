import { useEffect, useState } from "react";
import API from "../lib/axios";
import { useParams, useNavigate } from "react-router-dom";

const SinglePost = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [post, setPost] = useState(null);
    const [editMode, setEditMode] = useState(false);
    const [form, setForm] = useState({
        title: "",
        message: ""
    });

    async function fetchPost() {
        try {
          const res = await API.get(
            `/api/getPost/${id}`
          );

            if (!res.data.success) return;

            setPost(res.data.data);
            setForm({
                title: res.data.data.title || "",
                message: res.data.data.message || ""
            });

        } catch (error) {
            console.error("error fetching post", error);
        }
    }

    async function updatePost() {
        try {
          await API.put(
            `/api/updatePost/${id}`,
            {
              title: form.title,
              message: form.message
            }
          );

            alert("Post is editted");
            setPost(res.data.data);
            setEditMode(false);
            navigate('/myposts');

        } catch (e) {
            console.error("update failed", e);
        }
    }

    async function deletePost() {
        try {
          await API.delete(
            `/api/deletePost/${id}`
          );
            alert("Post deleted successfully");
            navigate("/myposts");

        } catch (e) {
            console.error("delete failed", e);
        }
    }

    useEffect(() => {
        fetchPost();
    }, [id]);

    if (!post) return <p>Loading...</p>;

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      
          <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-8 transition-all duration-300">
      
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-semibold text-gray-800">
                {editMode ? "Edit Post" : "Post Details"}
              </h1>
      
              <button
                onClick={() => navigate("/myposts")}
                className="text-sm text-gray-500 hover:text-black transition"
              >
                ← Back
              </button>
            </div>
      
            {editMode ? (
              <div className="flex flex-col gap-4">
      
                <input
                  value={form.title}
                  onChange={(e) =>
                    setForm({ ...form, title: e.target.value })
                  }
                  placeholder="Title"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                />
      
                <textarea
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  placeholder="Message"
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                />
      
                <div className="flex gap-3 mt-2">
                  <button
                    onClick={updatePost}
                    className="px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition shadow-sm"
                  >
                    Save
                  </button>
      
                  <button
                    onClick={() => setEditMode(false)}
                    className="px-5 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 transition"
                  >
                    Cancel
                  </button>
                </div>
      
              </div>
            ) : (
              <div className="flex flex-col gap-4">
      
                <div>
                  <p className="text-xs text-gray-400">Post ID</p>
                  <p className="text-gray-700">{post.id}</p>
                </div>
      
                <div>
                  <p className="text-xs text-gray-400">Title</p>
                  <p className="text-lg font-medium text-gray-900">
                    {post.title}
                  </p>
                </div>
      
                <div>
                  <p className="text-xs text-gray-400">Message</p>
                  <p className="text-gray-700 leading-relaxed">
                    {post.message}
                  </p>
                </div>
      
                {post.url && (
                  <div>
                    <p className="text-xs text-gray-400">Resource</p>
                    <a
                      href={post.url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      {post.url}
                    </a>
                  </div>
                )}
      
                {/* Actions */}
                <div className="flex gap-3 mt-6">
      
                  <button
                    onClick={() => setEditMode(true)}
                    className="px-5 py-2 rounded-lg bg-black text-white hover:bg-gray-800 transition shadow-sm"
                  >
                    Edit
                  </button>
      
                  <button
                    onClick={deletePost}
                    className="px-5 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition shadow-sm"
                  >
                    Delete
                  </button>
      
                </div>
      
              </div>
            )}
          </div>
        </div>
      );
};

export default SinglePost;