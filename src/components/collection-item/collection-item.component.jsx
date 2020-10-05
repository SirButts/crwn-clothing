import React from 'react';
import { connect } from 'react-redux';
import CustomButton from '../custom-button/custom-button.component';
import { addItem } from '../../redux/cart/cart.action';
import './collection-item.styles.scss';

//destructure off addItem 
const CollectionItem = ({ item, addItem }) => {
    //destructure our item now item can be used in our props
    const { name, price, imageUrl } = item
    return (
        <div className='collection-item'>
            <div
                className='image'
                style={{
                    backgroundImage: `url( ${imageUrl} )`
                }}
            />
            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>

            <CustomButton onClick={() => addItem(item)} inverted >ADD TO CART  </CustomButton >
        </div>
    )
};

//dispatch our new addItem
//addItem is a prop action that will be used in our CollectionItem component, when we dispatch the payload (item) is passed into our action function and dispatched to our root redux
const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default (connect(null, mapDispatchToProps))(CollectionItem);