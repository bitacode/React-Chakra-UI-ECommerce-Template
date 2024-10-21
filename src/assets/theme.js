import { extendTheme } from '@chakra-ui/react'
import '@fontsource-variable/archivo';

const theme = extendTheme({
    fonts: {
      heading: `'Archivo Variable', sans-serif`,
      body: `'Archivo Variable', sans-serif`,
    },
  })
  
  export default theme