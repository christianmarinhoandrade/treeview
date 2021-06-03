import React from 'react'
import { Switch } from 'react-router-dom'

import Route from './Route'

import routes from '~/utils/merge-routes'

function Routes() {
    return (
        <Switch>
            {routes.map((route) => (
                <Route
                    key={route.path}
                    path={route.path}
                    component={route.component}
                    breadcrumb={route.breadcrumb}
                    exact
                />
            ))}
        </Switch>
    )
}

export default Routes
