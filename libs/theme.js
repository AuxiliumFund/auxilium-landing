import { extendTheme, RangeSliderThumb } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

// const styles = {
//   global: (props) => ({
//     body: {
//       scrollbars: 'hidden',
//     },
//     initialColorMode: 'dark',
//     useSystemColorMode: false,
//   }),
// }

// const components = {
//   Link: {
//     baseStyle: (props) => ({
//       color: mode('#005FFF', '#005FFF')(props),
//       textUnderlineOffset: 3,
//     }),
//   },
// }

// const fonts = {
//   h1: 'Raleway',
// }

// const colors = {
//   grassTeal: '#88ccca',
// }

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const theme = extendTheme({ config })
export default theme
