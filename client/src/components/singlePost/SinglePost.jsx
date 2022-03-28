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
    

    useEffect(()=>{
        const getPost = async()=>{
            const res = await axios.get("/posts/" + path);
            setPost(res.data);
        };
        getPost()
    },[path]);

    const handleDelete = async()=>{
        try {
            await axios.delete("/posts/" + path, {data:{username:user.username}});
            window.location.replace("/");
        } catch (err) {
            
        }
    };
  return (
    <div className='singlePost'>
        <div className="postContent">
            <div className="singlePostWrapper">
                
                <h1 className="singlePostTitle">
                    {post.title}                    
                </h1>

                <div className="singlePostInfo">
                    {post.username === user?.username &&(
                    <div className="singlePostEdit">
                        <i className="singlePostIcon fa-solid fa-pencil"></i>
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
                
                <p className="singlePostContent">
                   {post.desc}
                    </p>
            </div>
        </div>
    </div>
  )
}
