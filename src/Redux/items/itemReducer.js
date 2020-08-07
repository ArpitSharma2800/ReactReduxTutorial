const initState = {
    numOfItem: 10
}

const itemReducer = (state = initState, action) => {
    switch (action.type) {
        case 'DERCREASE_ITEM': return {
            ...state,
            numOfItem: state.numOfItem - 1
        }
        default: return state
    }

}

export default itemReducer