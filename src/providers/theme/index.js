import React from 'react'
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components'
import theme from '../../styles/theme'

function ThemeProvider(props) {
    const { children } = props

    return (
        <StyledComponentsThemeProvider theme={theme}>
            {children}
        </StyledComponentsThemeProvider>
    )
}

export default ThemeProvider
