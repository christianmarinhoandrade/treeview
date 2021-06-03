import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Grid } from 'antd'

import Logo from '~/shared/Logo'
import Box from '~/shared/Box'
import Footer from '~/shared/Footer'

import {
    StyledLayout,
    StyledHeader,
    StyledMenu,
    StyledContent,
    StyledBreadcrumb,
    StyledContentWrapper,
} from './styles'

function DefaultContainer(props) {
    const { breadcrumb, children } = props
    const { useBreakpoint } = Grid

    const breakpoint = useBreakpoint()
    const history = useHistory()

    const menu = [{ title: 'Home', path: '/' }]

    const renderMenu = (menus) => {
        return menus.map((menu, index) => (
            <StyledMenu.Item
                onClick={() => {
                    if (menu.path) onClick(menu.path)
                }}
                key={index}
            >
                {menu.title}
            </StyledMenu.Item>
        ))
    }

    const onClick = (route) => {
        history.push(route)
    }

    return (
        <StyledLayout>
            <StyledHeader>
                <Box mt="25px" mr="16px" w="40px">
                    <Link to="/">
                        <Logo width={40} />
                    </Link>
                </Box>

                <StyledMenu theme="dark" mode="horizontal">
                    {menu && renderMenu(menu)}
                </StyledMenu>
            </StyledHeader>

            <StyledContent>
                <StyledBreadcrumb>
                    {breadcrumb?.map((breadcrumbItem) => {
                        return breadcrumbItem.path ? (
                            <Link
                                key={breadcrumbItem.breadcrumbName}
                                to={breadcrumbItem.path}
                            >
                                <StyledBreadcrumb.Item>
                                    {breadcrumbItem.breadcrumbName}
                                </StyledBreadcrumb.Item>
                            </Link>
                        ) : (
                            <StyledBreadcrumb.Item
                                key={breadcrumbItem.breadcrumbName}
                            >
                                {breadcrumbItem.breadcrumbName}
                            </StyledBreadcrumb.Item>
                        )
                    })}
                </StyledBreadcrumb>

                <StyledContentWrapper>{children}</StyledContentWrapper>
            </StyledContent>

            <Footer />
        </StyledLayout >
    )
}

export default DefaultContainer
