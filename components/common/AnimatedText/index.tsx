import React, {useState} from 'react';
import { NextPage } from "next";
import { useRouter } from 'next/router'
import {VStack, Button} from '@chakra-ui/react'
import {HeroContainer, HeroContent, HeroH1} from './AnimatedText'
import {motion} from 'framer-motion'
import { ArrowLeftIcon } from '@chakra-ui/icons'
import {AnimatePresence} from 'framer-motion'

type Props = {
    className?: string,
  }


const AnimatedText : NextPage<Props> = ({ className , ...props}) => {
  const router = useRouter();
  
  const initial = { opacity : 0 };
  const animate = { opacity : 1};


  
  return (
        <HeroContainer className={className}>
            <HeroContent as={motion.div} >
              <Button onClick={() => router.push('/')} variant='link'>
              <motion.div    whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                <ArrowLeftIcon > </ArrowLeftIcon>
                </motion.div>
              </Button>
                <VStack gap="40px" >
                <Button variant='ghost'>
                  <HeroH1 as={motion.div} initial={initial} animate={animate} transition={{ease: "anticipate", duration:1 }} onClick={() => router.push('/rugprotect')}>Protection from Rug-Pulls</HeroH1>
                </Button>
                <Button variant='ghost'>
                  <HeroH1 as={motion.div} initial={initial} animate={animate} transition={{ease: "anticipate", duration:2 }} onClick={() => router.push('/balance')} >Balance and Sustainability</HeroH1>
                </Button>
                <Button variant='ghost'>
                  <HeroH1 as={motion.div} initial={initial} animate={animate} transition={{ease: "anticipate", duration:3 }} onClick={() => router.push('/nftid')} >NFTs</HeroH1>
                </Button>
                <Button variant='ghost'>
                  <HeroH1 as={motion.div} initial={initial} animate={animate} transition={{ease: "anticipate", duration:4 }} onClick={() => router.push('/fundingdao')} >Funding</HeroH1>
                </Button>
                </VStack>
            </HeroContent>
            
        </HeroContainer> 

  );
}

export default AnimatedText;
