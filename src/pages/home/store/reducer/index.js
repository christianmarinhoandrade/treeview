const defaultState = {
    data: [],
}

const dataReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'DATA_SET':
            return {
                ...state,
                data: action.payload.data
            }
        default:
            return state
    }
}


export default { name: 'dataComponent', reducer: dataReducer }