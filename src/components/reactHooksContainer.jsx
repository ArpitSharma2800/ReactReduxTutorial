import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrease, increase } from '../Redux/items/itemsAction'
// import { connect } from 'react-redux'
function Container(props) {
    const numOfItem = useSelector(state => state.numOfItem)
    const dispatch = useDispatch()
    return (
        <div>
            <div>Items -  {numOfItem}</div>
            <button onClick={() => dispatch(decrease())}>Decrease</button>
            <button onClick={() => dispatch(increase())}>Increase</button>
        </div>
    )
}
// const mapStateToProps = state => {
//     return {
//         items: state.numOfItem
//     }
// }
// const dispatchStateToProps = dispatch => {
//     return {
//         itemsDecrease: () => dispatch(decrease()),
//         itemsIncrease: () => dispatch(increase())
//     }
// }

export default Container