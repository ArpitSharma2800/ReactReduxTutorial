import React from 'react'
// import decrease from '../Redux/items/itemsAction'
import { decrease } from '../Redux/items/itemsAction'
import { connect } from 'react-redux'
function container(props) {
    return (
        <div>
            <div>Items -  {props.items}</div>
            <button onClick={props.itemsDecrease}>Decrease</button>
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
        itemsDecrease: () => dispatch(decrease())
    }
}

export default connect(mapStateToProps, dispatchStateToProps)(container)