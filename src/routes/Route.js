import React from 'react'
import { Route as ReactRoute } from 'react-router-dom'
import Default from '../layouts/default'

function Route(props) {
    const { component: Component, path, breadcrumb } = props

    return (
        <ReactRoute
            path={path}
            render={() => {
                return (
                    <Default breadcrumb={breadcrumb}>
                        <Component />
                    </Default>
                )
            }}
        />
    )
}

export default Route
