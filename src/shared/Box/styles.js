import styled from 'styled-components'

const Box = styled.div`
  margin-top: ${(props) => props.mt};
  margin-right: ${(props) => props.mr};
  margin-bottom: ${(props) => props.mb};
  width: ${(props) => props.w};
`

export default Box
