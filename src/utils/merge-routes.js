const routesContext = require.context('../pages', true, /.routes./)
const routes = []

routesContext.keys().forEach((route) => {
    routes.push(...routesContext(route).default)
})

export default routes
