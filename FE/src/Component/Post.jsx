import { useEffect, useState } from "react";
import axios from "axios";

const SinglePost = () => {
    const [post, setPost] = useState(null);
    const [editMode, setEditMode] = useState(false);
    const [form, setForm] = useState({
        title: "",
        message: ""
    });

    async function fetchPost() {
        try {
            const res = await axios.get('http://localhost:3009/api/getPost');

            if (!res.data.success) return;

            setPost(res.data.data);
            setForm({
                title: res.data.data.title || "",
                message: res.data.data.message || ""
            });

        } catch (error) {
            console.error("error in fetching the selected post", error);
        }
    }

    async function updatePost() {
        try {
            const res = await axios.put('http://localhost:3009/api/updatePost', {
                id: post.authorId,
                title: form.title,
                message: form.message
            });

            setPost(res.data);
            setEditMode(false);

        } catch (e) {
            console.error("update failed", e);
        }
    }

    useEffect(() => {
        fetchPost();
    }, []);

    if (!post) return <p>Loading...</p>;

    return (
        <div style={{ padding: "20px" }}>
            <div style={{
                maxWidth: "500px",
                margin: "auto",
                padding: "20px",
                borderRadius: "12px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
            }}>
                {editMode ? (
                    <>
                        <input
                            value={form.title}
                            onChange={(e) => setForm({ ...form, title: e.target.value })}
                            placeholder="Title"
                        />
                        <textarea
                            value={form.message}
                            onChange={(e) => setForm({ ...form, message: e.target.value })}
                            placeholder="Message"
                        />

                        <button onClick={updatePost}>Save</button>
                        <button onClick={() => setEditMode(false)}>Cancel</button>
                    </>
                ) : (
                    <>
                        <p><strong>ID:</strong> {post.id}</p>
                        <p><strong>Title:</strong> {post.title}</p>
                        <p><strong>Message:</strong> {post.message}</p>
                        <p><strong>URL:</strong> {post.url}</p>

                        <button onClick={() => setEditMode(true)}>Edit</button>
                    </>
                )}
            </div>
        </div>
    );
};

export default SinglePost;