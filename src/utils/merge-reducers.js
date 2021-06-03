const reducersContext = require.context('../pages', true, /.reducer./)
const reducers = {}

reducersContext.keys().forEach((reducer) => {
    const name = reducersContext(reducer).default.name
    const reducerFn = reducersContext(reducer).default.reducer
    reducers[name] = reducerFn
})

export default reducers
