import React from 'react'
import { motion } from 'framer-motion'
import { useState } from 'react'
const Footer = () => {
    const [isOpen, setIsOpen] = useState(false)
    const handleClick = () => setIsOpen(!isOpen)
    return (
        <motion.div layout className='card' onClick={handleClick}><h2>About Me 🚀</h2>
            {isOpen && (
                <motion.div className='cardinfo'>
                    <motion.h3>Subhadeep Chell</motion.h3>
                    <motion.div>
                        <p>👋 Meet Subhadeep Chell,<br /> a talented UI/UX Designer 🎨and Web Developer💻,

                            <br />who is also known as SHERLOCK🔍 in the tech world.<br />

                            With a passion for creating visually stunning and <bt />user-friendly web applications,

                            <br /> SHERLOCK is always on the lookout for new challenges to enhance his skills.<br />

                            Currently, he is learning the art of backend web development<br /> and is also exploring the exciting world

                            <br />of AI integration🤖 in web applications. </p>
                    </motion.div></motion.div>
            )}</motion.div>

    )
}

export default Footer