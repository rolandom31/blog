import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import "./singlePost.css";
import axios from "axios";
import { useState } from "react";
import { useContext } from "react";
import { Context } from "../../context/Context";

export default function SinglePost() {
    const location = useLocation();
    const path = (location.pathname.split("/")[2]);
    const [post, setPost] = useState({});
    const PF = "http://localhost:5003/images/";
    const {user} = useContext(Context);
    const [title, setTitle] = useState("");
    const [desc,setDesc] = useState("");
    const [updateMode, setUpdateMode] = useState(false);
    

    useEffect(()=>{
        const getPost = async()=>{
            const res = await axios.get("/posts/" + path);
            setPost(res.data);
            setTitle(res.data.title);
            setDesc(res.data.desc);
        };
        getPost()
    },[path]);

    const handleDelete = async () => {
        try {
          await axios.delete(`/posts/${post._id}`, {
            data: { username: user.username },
          });
          window.location.replace("/");
        } catch (err) {}
      };

    const handleUpdate = async ()=>{
        try {
            await axios.put(`/posts/${post._id}`, 
            {username:user.username, title, desc,});
            setUpdateMode(false);
        } catch (err) {
            
        }
    }

  return (
    <div className='singlePost'>
        <div className="postContent">
            <div className="singlePostWrapper">
                { updateMode ? ( 
                <input type="text"
                 value={title} 
                 className="singlePostTitle"
                 autoFocus 
                 onChange={(e)=> setTitle(e.target.value)}/> 
                ):(
                    <h1 className="singlePostTitle" >
                    {title}                    
                </h1>)
                
                }
                
                
                <div className="singlePostInfo">
                    {post.username === user?.username &&(
                    <div className="singlePostEdit">
                        <i className="singlePostIcon fa-solid fa-pencil" onClick={()=>setUpdateMode(true)}></i>
                        <i className="singlePostIcon fa-solid fa-trash" onClick={handleDelete}></i>
                    </div>
                    )}
                    {post.photo &&
                    <img className="singlePostImage" src={PF + post.photo} alt="" />
                    }
                    
                    <span className="singlePostAuthor">
                        Author:
                        <Link to={`/?user=${post.username}`} className="link">
                            <b>{post.username}</b>
                        </Link>
                        
                    </span>
                    <span className="singlePostDate">{new Date(post.createdAt).toDateString()}</span>
                </div>
                {updateMode?(
                <textarea className="singlePostContentInput" value={desc} onChange={(e)=>setDesc(e.target.value)}/>
                ):(
                    <p className="singlePostContent">
                   {desc}
                    </p>
                )}
                {updateMode && (
                    <button className="singlePostButton" onClick={handleUpdate}>Update</button>
                )}
                
            </div>
            
        </div>
    </div>
  )
}

  