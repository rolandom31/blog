import "./posts.css"
import Post from "../post/Post"
import { motion } from "framer-motion"
import {useState} from "react";
//whileHover={{ scale: 1.1 }} initial={{ opacity: 0 }}
 // whileInView={{ opacity: 1 }}
  //viewport={{ once: true }}
   /* esto iba adentro del return
   <motion.div className='posts'  >
      {posts.map(p=>(
        <motion.div className="div"whileHover={{ scale: 1.1 }}>

        <Post post={p} whileHover={{ scale: 1.1 }}/>
        </motion.div>
        
      ))}
      </motion.div>*/
export default function Posts({posts}) {
  const [query, setQuery] = useState("")
  return (
  <div>
      <input placeholder="Enter Post Title" onChange={event => setQuery(event.target.value)} />
    {
      posts.filter(p => {
        if (query === '') {
          return p;
        } else if (p.title.toLowerCase().includes(query.toLowerCase())) {
          return p;
        }
      }).map(p => (
        <Post post={p} />
      ))
    }
    </div>
) }

