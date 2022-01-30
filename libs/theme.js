import { extendTheme, RangeSliderThumb } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: (props) => ({
    body: {
      bg: '#fffff',
      scrollbars: 'hidden',
      //      bg: '#00132e',
    },
  }),
}

const components = {
  Link: {
    baseStyle: (props) => ({
      color: mode('#005FFF', '#005FFF')(props),
      textUnderlineOffset: 3,
    }),
  },
}

const fonts = {
  h1: 'Raleway',
}

const colors = {
  grassTeal: '#88ccca',
}

const theme = extendTheme({ styles, components, fonts, colors })
export default theme
