import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import "./singlePost.css";
import axios from "axios";
import { useState } from "react";

export default function SinglePost() {
    const location = useLocation();
    const path = (location.pathname.split("/")[2]);
    const [post, setPost] = useState({})
    

    useEffect(()=>{
        const getPost = async()=>{
            const res = await axios.get("/posts/" + path);
            setPost(res.data);
        };
        getPost()
    },[path]);
  return (
    <div className='singlePost'>
        <div className="postContent">
            <div className="singlePostWrapper">
                
                <h1 className="singlePostTitle">
                    {post.title}                    
                </h1>
                <div className="singlePostInfo">
                    <div className="singlePostEdit">
                        <i className="singlePostIcon fa-solid fa-pencil"></i>
                        <i className="singlePostIcon fa-solid fa-trash"></i>
                    </div>
                    {post.photo &&
                    <img className="singlePostImage" src={post.photo} alt="" />
                    }
                    
                    <span className="singlePostAuthor">Author: <b>{post.username}</b></span>
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
