// theme.js
import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  components: {
    Button: {
      // 1. We can update the base styles
baseStyle: {
        fontWeight: 'bold', // Normally, it is "semibold"
        color :'white',
        _hover: {
          textDecoration: 'underline',
          boxShadow : 'md'
        }
      },
      // **********************************
variants: {
        
        // 4. si mode noir couleur sinon couleur
        solid: (props) => ({
          bg: props.colorMode === 'dark' ? 'discord.50' : 'bleub.400',
          _hover:{
          bg : props.colorMode === 'dark' ? 'discord.100' : 'bleub.200',
          }
        }),
      },
      // **********************************
    },
  },
  colors: {
  discord: {
    50 :'#e69910',
    100:'#e67410'
  },
	bleub: {
		50: '#12d2ff',
		100: '#00b4df',
		200: '#00a0c5',
		300: '#008bab',
		400: '#007692',
		500: '#004d5f',
		600: '#00242c',
		700: '#000f13',
		800: '#000000',
		900: '#000000',
	},
  },
  colorScheme: {
    discord: {
      50 :'#e69910',
      100:'#e67410'
    },
    bleub: {
      50: '#12d2ff',
      100: '#00b4df',
      200: '#00a0c5',
      300: '#008bab',
      400: '#007692',
      500: '#004d5f',
      600: '#00242c',
      700: '#000f13',
      800: '#000000',
      900: '#000000',
    },
    },
  
})



export default theme