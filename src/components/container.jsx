import React from 'react'
import { decrease, increase } from '../Redux/items/itemsAction'
import { connect } from 'react-redux'
function container(props) {
    return (
        <div>
            <div>Items -  {props.items}</div>
            <button onClick={props.itemsDecrease}>Decrease</button>
            <button onClick={props.itemsIncrease}>Increase</button>
        </div>
    )
}
const mapStateToProps = state => {
    return {
        items: state.numOfItem
    }
}
const dispatchStateToProps = dispatch => {
    return {
        itemsDecrease: () => dispatch(decrease()),
        itemsIncrease: () => dispatch(increase())
    }
}

export default connect(mapStateToProps, dispatchStateToProps)(container)