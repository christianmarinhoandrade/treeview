import styled from 'styled-components'
import { UpOutlined, DownOutlined } from '@ant-design/icons'

const Row = styled.div`
    display: flex;
    padding: 5px;
    cursor: pointer;
    &:hover { 
        background-color:#f5f5f5;
    }
`

const Column = styled.div`
    ${(props) => `    
        ${props.marginLeft === "auto" ? `margin-left: ${props.marginLeft};` : props.marginLeft ? `margin-left:${props.marginLeft}px;` : ''}        
    `}
    padding: 5px;
`

const IconUpBlue = styled(UpOutlined)`
    color: #1a75ff
`

const IconDown = styled(DownOutlined)`
`



export { Row, Column, IconUpBlue, IconDown }
