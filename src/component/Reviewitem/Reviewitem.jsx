import React from 'react';
import './Reviewitem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt} from '@fortawesome/free-solid-svg-icons'


const Reviewitem = ({product,handleFromCart}) => {
    const {id,img,price,name,quantity} = product
    return (
        <div className='review-item'>
            <img src={img} alt="" />
            <div className="review-details">
                <p className='product-title'>{name}</p>
                <p>price : <span className='orange-text'>${price}</span></p>
                <p>Quantity : <span className='orange-text'>{quantity}</span></p>
                <p></p>
            </div>

            <button onClick={()=> handleFromCart(id)} className='btn-delete'>
                <FontAwesomeIcon className='delete-icon ' icon={faTrashAlt} />
            </button>
        </div>
    );
};

export default Reviewitem;