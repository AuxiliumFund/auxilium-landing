import { ArrowForwardIcon } from '@chakra-ui/icons';
import React, {useState} from 'react';
import { useRouter } from 'next/router'
import { NextPage } from "next";
import {motion} from 'framer-motion'


import {HeroContainer, HeroContent, HeroH1,
    HeroP,  
    HeroBg, VideoBg, ArrowForward, ArrowRight} from './HeroElements'
import { Button, HStack, Text } from '@chakra-ui/react'
import { route } from 'next/dist/server/router';

type Props = {
    className?: string,
  }

const HeroSection : NextPage<Props> = ({ className , ...props}) => {
  const router = useRouter()
  const [hoverApp, setHoverApp] = useState(false)
  const [hoverLearn, setHoverLearn] = useState(false)
  const [changeRoute, setChangeRoute] = useState(0)
  const [opacitySet, setOpacity] = useState(1)

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  
  const onHoverApp = () => {
    setHoverApp(!hoverApp)
  }
  
  const onHoverLearn = () => {
    setHoverLearn(!hoverLearn)
  }

  const onChangeRoute = () => {
    setChangeRoute(changeRoute - 3000);
    setOpacity(0);
    sleep(2000).then(() => { router.push('/vision'); });
  }

  return (
        <HeroContainer className={className}>

        <motion.div >
        <HeroContent as={motion.div} initial={ {opacity : 1 }} animate={{ x : changeRoute , opacity : opacitySet}} transition={{ease: "anticipate", duration:1.8 }} >
            <HeroH1>Auxilium</HeroH1>
            <HeroP >
                Welcome to Auxilium, where we help you get above water.
            </HeroP>
            <HStack gap={4}>
            <motion.div     whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Button to="app" onMouseEnter={onHoverApp} onMouseLeave={onHoverApp} disabled={true}>
                Enter App {hoverApp ? <ArrowForward/> : <ArrowRight/>}
            </Button>             
            </motion.div>
            
            <motion.div     whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Button onClick={onChangeRoute} onMouseEnter={onHoverLearn} onMouseLeave={onHoverLearn}>
                Our Vision {hoverLearn ? <ArrowForward/> : <ArrowRight/>}
            </Button>
            </motion.div>
            </HStack>

        </HeroContent>
        </motion.div>

        </HeroContainer> 


  );
}

export default HeroSection;
