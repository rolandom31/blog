import './header.css'
import { motion } from "framer-motion"

export default function Header() {
  return (
    <div className='header'>
      <motion.div
          animate={{ scale: 2 }}
          transition={{ duration: 0.5 }}
          className="headerTitle"
          
      />
        <motion.div className="headerTitle"   >
            <span className='headerTitleSm'>React & Node</span>
            <span className="headerTitleLg"> Blog </span>
            
           </motion.div>
        {/*}
        <img className='headerImage' src={'/images/hero.jpg'} alt="" />*/}
    </div>
  )
}
