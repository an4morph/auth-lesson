import styled from "styled-components"
import { Container } from "../../styles/adaptive"

export const Content = styled(Container)`
  padding-top: 40px;
  padding-bottom: 40px;
  min-height: ${({ $footerH, $headerH }) => {
    const value = [$footerH, $headerH]
      .filter(el => el)
      .map(el => `${el}px`)
      .join(' - ')
    return `calc(100vh - ${value || '0'})`
  }};
`