const initState = {
    numOfUser: 20
}

const itemReducer = (state = initState, action) => {
    switch (action.type) {
        case 'DERCREASE_USER':
            return {
                ...state,
                numOfUser: state.numOfUser - 1
            }
        case 'INCREASE_USER':
            return {
                ...state,
                numOfUser: state.numOfUser + 1
            }
        default:
            return state
    }

}

export default itemReducer