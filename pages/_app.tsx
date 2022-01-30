import type { AppProps } from 'next/app'
import { AnimatePresence } from 'framer-motion'
import { ChakraProvider } from '@chakra-ui/provider'
import { motion } from 'framer-motion'
import {Fonts} from '../components/common/Fonts/Fonts'
import Layout from '../components/common/Layout/'

import theme from '../libs/theme'
import {HeroContainer, HeroContent, HeroH1,
  HeroP,  
  HeroBg, VideoBg, ArrowForward, ArrowRight} from '../components/common/HeroSection/HeroElements'

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />

        <Layout >
        <AnimatePresence>
        <motion.div key ={router.route} initial = "pageInitial" animate="pageAnimate" variants={
        {
          pageInitial: {
            opacity : 0.3
          },
          pageAnimate: {
            opacity: 1
          }
        }}>
        <Component {...pageProps} />
        </motion.div>
        </AnimatePresence>
        </Layout>
       {/* </motion.div> */}
   
    </ChakraProvider>

    )
}

export default MyApp
