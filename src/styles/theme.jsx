import { ThemeProvider } from 'styled-components'

import { GlobalStyle } from './global'

const PRIMARY_COLOR = '#6285DF'

const WHITE = '#FFFFFF'
const BLACK = '#2C3343'

const theme = {
  fonts: {
    normal: "'Poppins', sans-serif",
  },
  colors: {
    primary: PRIMARY_COLOR,
    body: '#EEEEEE',
    text: BLACK,
    footer: {
      bg: BLACK,
      text: WHITE,
    },
  }
}

export const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
)