import { React, useState } from 'react'
import Calculator from './components/Calculator'
import Footer from './components/Footer'
import { motion } from 'framer-motion'


function App() {
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)
  return (
    <motion.div layout className='Header'>
      <motion.h1 onClick={handleClick}>ReactCalc</motion.h1>
      <motion.h3>Simplify Math, Swift and Snappy!</motion.h3>
      {show && (
        <motion.div>
          <Calculator />
          
          <Footer />
        </motion.div>)}
    </motion.div>
  )
}

export default App
