import { extendTheme, RangeSliderThumb } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: (props) => ({
    body: {
      scrollbars: 'hidden',
    },
  }),
}

const components = {
  Link: {
    baseStyle: (props) => ({
      initialColorMode: 'dark',
      useSystemColorMode: false,
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
