import {
    combineReducers
} from 'redux'
import itemReducer from './items/itemReducer'
import userReducer from './users/userReducer'
const Root = combineReducers({
    item: itemReducer,
    user: userReducer
})

export default Root