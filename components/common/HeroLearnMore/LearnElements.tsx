import styled from 'styled-components'
import {
  MdKeyboardArrowRight,
  MdArrowForward
} from 'react-icons/md'

interface Props {}

export const HeroContainer = styled.div < Props > `
    dislay: flex;
    justify-content: center,
    align-items: center;
    height: 100%;
    width: 100%;
    position: fixed;
    z-index: 1;
    :before {
      content: '';
      position: fixed;
      top: 0;
      left: 0;
      right :0;
      bottom: 0;
      background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.3) 100%
        ),
        linear-gradient(
          180deg,
          rgba(0,0,0,0.2) 0%,
          transparent 100%);
        z-index: 2;
    }

`
export const GlassyContainer = styled.div <Props>`
    background: inherit;
    :before {
      height: 80%;
      width: 70%;
      content: '';
      position: absolute;
      margin: auto;
      background: inherit;
      box-shadow: inset 0 0 2000px rgba(255, 255, 255, .6);
      filter: blur(2px);
      top:0;
      left:0;
      right:0;
      bottom:0;
    }

`


export const HeroBg = styled.div < Props > `

`
export const HeroH1 = styled.h1 < Props > `
  font-size: 90px;
  text-align: center;
  font-family: 'Outfit-Bold';

 @media screen and (max-width: 480px) {
    font-size: 40px;
  }
    `


export const HeroContent = styled.div < Props > `
    z-index: 3;
    position: relative;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Outfit Regular';

  }`

export const HeroP = styled.p < Props > `
    font-family: 'Raleway';
    font-size: 24px;
    margin-top: 50px;
    text-align: justify;
    min-width: 150px;
    @media screen and (max-width: 480px) {
        font-size: 12px;
        margin-top: 10px;


`
export const HeroBtnWrapper = styled.div < Props > `
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  `


export const ArrowForward = styled(MdArrowForward) < Props > `
  margin-left: 8pxi,
  font-size: 20px;
  `
export const ArrowRight = styled(MdKeyboardArrowRight) < Props > `
    margin-left: 8pxi,
    font-size: 20px;
    `