import type { NextPage } from 'next'
import { useRouter } from 'next/router'

import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { LandingNav } from '../components/common/NavBar/LandingNav'
import { Grid, VStack, Text, Flex } from '@chakra-ui/react'
import {HeroContainer, HeroContent, HeroRugs, HeroRugsText} from '../components/common/AnimatedText/AnimatedText'
import {motion, AnimatePresence } from 'framer-motion'
import {useState, useEffect} from 'react'
import { ArrowLeftIcon } from '@chakra-ui/icons'

const Balance: NextPage<Props> = ({ className , ...props}) => {
  const initial = { opacity : 0 };
  const animate = { opacity : 1};
  const exit = { opacity : 0 };

  const [showText, setShowText] = useState(false)
  const router = useRouter();

  const animationStates = {

    hidden : { opacity : 0 },
    visible : { opacity : 1},
    exit : { opacity : 0 }

  }

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  useEffect(() => {
    sleep(3200).then(() => { setShowText(true)});
  });

  return (
    <div>

      <Head>
        <title>Auxilium</title>
      </Head>
      <HeroContainer className={className}>

            <AnimatePresence>

            {!showText &&
            <HeroContent as={motion.div} initial={initial} animate={animate} transition={{ease: "anticipate", duration:1 }} exit={exit} >
              
            <VStack >
            <HeroRugs as={motion.div} initial={initial} animate={animate} transition={{ease: "anticipate", duration:1 }} >
            Suits.
            </HeroRugs>
            <HeroRugs as={motion.div} initial={initial} animate={animate} transition={{ease: "anticipate", duration:2 }} >
            Greed.
            </HeroRugs>
            </VStack>
            
            </HeroContent>
            }
            { showText &&

            <HeroRugsText as={motion.div} initial={initial} animate={animate} transition={{ease: "anticipate", duration:1 }} exit={exit} >
            We plain to thrive with governance-made decisions that aim for balance. <br/> Being sustainable is one of our main goals.
             <br/><br/> 
            We had enough of insiders and suits acting as frogs.
            </HeroRugsText > 

            }
            </AnimatePresence>

        </HeroContainer> 
    </div>
  )
}


export default Balance;
