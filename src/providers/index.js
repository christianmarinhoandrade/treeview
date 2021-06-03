import React from 'react'
import ThemeProvider from './theme'
import DataProvider from './data'

function Providers(props) {
    const { children } = props

    return (
        <ThemeProvider>
            <DataProvider>
                {children}
            </DataProvider>
        </ThemeProvider>)
}

export default Providers
