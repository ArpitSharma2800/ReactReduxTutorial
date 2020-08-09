import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrease, increase } from '../Redux/items/itemsAction'
import { decreaseUSER, increaseUSER } from '../Redux/users/userAction'
function Container(props) {
    const numOfItem = useSelector(state => state.item.numOfItem)
    const numOfUser = useSelector(state => state.user.numOfUser)
    const dispatch = useDispatch()
    return (
        <div>
            <div>Items -  {numOfItem}</div>
            <button onClick={() => dispatch(decrease())}>Decrease</button>
            <button onClick={() => dispatch(increase())}>Increase</button>
            <div> Users - {numOfUser}</div>
            <button onClick={() => dispatch(decreaseUSER())}>Decrease</button>
            <button onClick={() => dispatch(increaseUSER())}>Increase</button>
        </div>
    )
}

export default Container