import styled from 'styled-components'
import {
  MdKeyboardArrowRight,
  MdArrowForward
} from 'react-icons/md'

interface Props {}

export const HeroContainer = styled.div < Props >`
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

export const HeroH1 = styled.h1 < Props > `
  font-size: 42px;
  z-index: 2;
  font-family: 'Outfit-Bold';
  text-align: center;
  @media screen and (max-width: 480px) {
    font-size: 22px;
  }
  :hover { 
    text-decoration: underline;
  }
    `

export const HeroRugs = styled.h1 < Props > `
  font-size: 42px;
  z-index: 2;
  font-family: 'Outfit-Bold';
  text-align: center;
  @media screen and (max-width: 480px) {
    font-size: 19px;
  }
  :hover { 

  }
    `
export const HeroRugsText = styled.h1 < Props > `
    z-index: 3;
    position: fixed;
    top: 50%;
    left: 50%;
    text-align: center;
    max-width: 100vh;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    font-family: 'Outfit Regular';
    font-size: 42px;
    @media screen and (max-width: 480px) {
      font-size: 19px;
    }
    `
    

export const HeroContent = styled.div < Props > `
    z-index: 3;
    position: fixed;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
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
