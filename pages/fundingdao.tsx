import type { NextPage } from 'next'
import { useRouter } from 'next/router'

import Head from 'next/head'
import { Grid, VStack, Text, Flex } from '@chakra-ui/react'
import {HeroContainer, HeroContent, HeroRugs, HeroRugsText} from '../components/common/AnimatedText/AnimatedText'
import {motion, AnimatePresence } from 'framer-motion'
import {useState, useEffect} from 'react'

type Props = {
  className?: string,
}


const FundingDAO: NextPage<Props> = ({ className , ...props}) => {
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

  function sleep(ms:any) {
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
            Funding.
            </HeroRugs>
            </VStack>
            
            </HeroContent>
            }
            { showText &&

            <HeroRugsText as={motion.div} initial={initial} animate={animate} transition={{ease: "anticipate", duration:1 }} exit={exit} >
            We are offering a rebase DAO model for funding, <br/> as most our team right now is working pro bono. <br/> 
            We dont expect anything more than support for features that benefit the DeFi space.
             <br/><br/> 

            </HeroRugsText > 

            }
            </AnimatePresence>

        </HeroContainer> 
    </div>
  )

}

export default FundingDAO;
