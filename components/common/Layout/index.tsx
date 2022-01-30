import React from 'react';
import {HeroContainer, HeroContent, HeroH1,
    HeroP,  
    HeroBg, VideoBg, ArrowForward, ArrowRight} from '../HeroSection/HeroElements'
import LandingNav from '../NavBar/LandingNav';
import { NextPage } from "next";


type Props = {
  className?: string,
}

const Layout : NextPage<Props> = ({ children  }) => {
  return (
    
    <main>
    <HeroBg>
    <VideoBg  autoPlay loop muted src="/assets/bg_blue.mp4" ></VideoBg>
    </HeroBg>
    <LandingNav/>
    {children}
    </main>
    )
}

export default Layout;
