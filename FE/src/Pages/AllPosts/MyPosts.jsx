import { useEffect,useState } from "react"
import axios from "axios"

const MyPost=()=>{
    const [data, setData] = useState([]);
    const FetchAll=async()=>{
        try{
            const res=await axios.get('http://localhost:3009/api/')
            
            if(!res.data.success){
                return ;
            }
            setData(res.data.data);

        }catch(e){

        }
    }

    useEffect(()=>{
        FetchAll();
    },[])
    return(
        <div className="container">
        {data.map((i, k) => (
            <div key={k} className="card">
                <h3 className="title">{i.title}</h3>

                {i.message && <p className="content">{i.message}</p>}

                {i.url && (
                    <a href={i.url} target="_blank" rel="noreferrer">
                        View Resource
                    </a>
                )}

                {/* optional fields */}
                {i.createdAt && (
                    <p className="date">
                        {new Date(i.createdAt).toLocaleDateString()}
                    </p>
                )}
            </div>
        ))}
    </div>
    )
}
export default MyPost;