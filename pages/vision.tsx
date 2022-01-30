import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { LandingNav } from '../components/common/NavBar/LandingNav'
import { Grid } from '@chakra-ui/react'
import AnimatedText from '../components/common/AnimatedText/'

const Vision: NextPage = () => {
  return (
    <div>

      <Head>
        <title>Auxilium</title>
      </Head>
    <AnimatedText/>
    </div>
  )
}

export default Vision;
