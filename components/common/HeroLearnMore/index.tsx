import { Box, Flex, VStack, Grid, GridItem, Text } from '@chakra-ui/react';
import React, {useState} from 'react';
import { NextPage } from "next";
import GlassFlex from "../GlassFlex";
import { useRouter } from 'next/router'
import { ArrowLeftIcon } from '@chakra-ui/icons'


import {HeroContainer, HeroContent, HeroH1,
    HeroP,  
    HeroBg, ArrowForward, ArrowRight, GlassyContainer} from './LearnElements'
import { Button, HStack } from '@chakra-ui/react'

type Props = {
    className?: string,
  }


const HeroSection : NextPage<Props> = ({ className , ...props}) => {
  const router = useRouter();

  return (
        <HeroContainer className={className}>
        <GlassFlex filter={true}/> 
        <Flex   h="80%" w="70%"  margin="auto" position="absolute" top={0} left={0} right={0} bottom={0} background="inherit" >
        <VStack  zIndex={2}  w="150px" h="100%" spacing="50px" marginRight={15}>
        <ArrowLeftIcon onClick={() => router.push('/')} marginTop={5} marginRight={20}> </ArrowLeftIcon>
        {/* <Button backgroundColor='inh' w={20} h={20}>DAO</Button>
        <Button  w={20} h={20}>RugClaim</Button>
        <Button  w={20} h={20}>NFTs</Button>
        <Button  w={20} h={20}>RugSell</Button> */}

        </VStack>
        <Flex borderLeft="1px" filter="blur(1px)" w={30}>

        </Flex>
        {/* <VStack marginRight={30} zIndex={2} w="100%" h="100%" >
        <HeroContent>
          <HeroH1>Products</HeroH1>
           <HeroP>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</HeroP>
        </HeroContent>
        </VStack> */}
        </Flex>

        </HeroContainer> 

  );
}

export default HeroSection;
