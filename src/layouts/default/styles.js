import { Layout, Menu, Breadcrumb } from 'antd'

import styled from 'styled-components'
import media from 'styled-media-query'

const { Header, Content } = Layout

const StyledLayout = styled(Layout)`
    min-height: 100vh;
`

const StyledHeader = styled(Header)`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const StyledMenu = styled(Menu)`
    width: 100%;
`

const StyledContent = styled(Content)`
    padding: 0 50px;
    
    ${media.lessThan('medium')`
        padding: 0 10px;
    `}
`

const StyledBreadcrumb = styled(Breadcrumb)`
    margin: 16px 0;

    a {
        cursor: pointer;
    }
`

const StyledContentWrapper = styled.div`
    padding: 24px;
    background-color: #fff;

    
    ${media.lessThan('medium')`
        padding: 5px;
    `}
`

export {
    StyledLayout,
    StyledHeader,
    StyledMenu,
    StyledContent,
    StyledBreadcrumb,
    StyledContentWrapper,
}
