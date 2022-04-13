import "./posts.css"
import Post from "../post/Post"
import { motion } from "framer-motion"
//whileHover={{ scale: 1.1 }} initial={{ opacity: 0 }}
 // whileInView={{ opacity: 1 }}
  //viewport={{ once: true }}
export default function Posts({posts}) {
  return (
    <motion.div className='posts'  >
      {posts.map(p=>(
        <motion.div className="div"whileHover={{ scale: 1.1 }}>

        <Post post={p} whileHover={{ scale: 1.1 }}/>
        </motion.div>
        
      ))}
    </motion.div>
  )
}
