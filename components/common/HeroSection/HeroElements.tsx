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
    padding:  70px;
    height: 100%;
    width: 100%;
    z-index: 1;
    overflow-x: hidden;
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

export const HeroBg = styled.div < Props > `
    position: fixed;
    background-color: white;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;

`
export const HeroH1 = styled.h1 < Props > `
  color: #fff;
  font-size: 90px;
  text-align: center;
  font-family: 'Outfit-Bold';

 @media screen and (max-width: 480px) {
    font-size: 60px;
  }
    `
export const VideoBg = styled.video < Props > `
  
    min-width: 100%; 
    min-height: 100%; 
    -o-object-fit: cover;
    object-fit: cover;
`

export const HeroContent = styled.div < Props > `
    z-index: 3;
    position: relative;
    margin-top: 200px;

    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Outfit Regular';

  }`

export const HeroP = styled.p < Props > `
    margin-top: 24px;
    margin-bottom: 50px;
    color: #fff;
    font-size: 24px;
    text-align: center;
    min-width: 200px;
    @media screen and (max-width: 480px) {
        font-size: 15px;
        max-width: 

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