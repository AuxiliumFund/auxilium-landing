import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { LandingNav } from '../components/common/NavBar/LandingNav'
import { Grid } from '@chakra-ui/react'
import HeroLearn from '../components/common/HeroLearnMore'

import {HeroContainer, HeroContent, HeroH1,
  HeroP,  
  HeroBg, VideoBg, ArrowForward, ArrowRight} from '../components/common/HeroSection/HeroElements'

const Learn: NextPage = () => {
  return (
    <div>

      <Head>
        <title>Auxilium</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <HeroLearn/> */}

    </div>
  )
}

export default Learn
