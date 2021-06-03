import { Layout, Typography } from 'antd'
import styled from 'styled-components'

const { Footer } = Layout
const { Text } = Typography

const StyledFooter = styled(Footer)`
  background-color: transparent;
  text-align: center;
`

const StyledText = styled(Text)`
  color: ${(props) => props.color};
`

export { StyledFooter, StyledText }
