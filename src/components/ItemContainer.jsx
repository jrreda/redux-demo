import React from 'react'
import { connect } from 'react-redux'

function ItemContainer({ item }) {
  return (
    <div>
        <h2>Item: {item}</h2>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    item: ownProps.cake ? state.cake.numOfCakes : state.iceCream.numOfIceCreams,
  };
};

export default connect(mapStateToProps)(ItemContainer);