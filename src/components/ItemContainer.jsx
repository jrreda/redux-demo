import React from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux/cake/cakeActions'
import { buyIceCream } from '../redux/iceCream/iceCreamActions'

function ItemContainer({ item, buyItem }) {
  return (
    <div>
        <h2>Item: {item}</h2>
        <button type='button' onClick={buyItem}>Buy Item</button>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    item: ownProps.cake ? state.cake.numOfCakes : state.iceCream.numOfIceCreams,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    buyItem: () => dispatch(ownProps.cake ? buyCake() : buyIceCream()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);