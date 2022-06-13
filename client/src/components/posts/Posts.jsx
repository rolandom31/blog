import "./posts.css"
import Post from "../post/Post"
import { motion } from "framer-motion"
import {useState} from "react";
   
export default function Posts({posts}) {
  const [query, setQuery] = useState("")
  return (
  <div>
      <input className="searchBar" placeholder="Enter Post Title" onChange={event => setQuery(event.target.value)} />
   <motion.div className="posts"> {
      posts.filter(p => {
        if (query === '') {
          return p;
        } else if (p.title.toLowerCase().includes(query.toLowerCase())) {
          return p;
        }
      }).map(p => (
        <motion.div className="div"whileHover={{ scale: 1.1 }}>
        <Post post={p} whileHover={{ scale: 1.1 }}/>
        </motion.div>
      ))
    }</motion.div>
    </div>
) }

