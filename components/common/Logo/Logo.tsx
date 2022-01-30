import React from 'react';
import {motion} from 'framer-motion'
function Logo() {
  return ( 
    <motion.button
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
  >
    <img src="logo.png" width={40} height={40}></img>
  </motion.button>
  );
}

export default Logo;
