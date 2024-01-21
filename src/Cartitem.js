import React from 'react';

const Cartitem = (props) => {
    const {
        price,
        title,
        qty
    } = props.product; 
    const {product,
         onincreasequantity,
          ondecreasequantity,
           ondeleteproduct
        } = props;
    return (
        <div className='cart-item'>
            <div className='left-block'>
                <img style={styles.image} src={product.img} />
            </div>
        <div className='right-block'>
            <div style={ { fontSize: 25 } }>
                {title}
            </div>
        <div style={ { color: '#777' } }>
            {price}
        </div>
        <div style={ { color: '#777' } }>
            {qty}
        </div>
        <div className='cart-item-actions'>
                {/* Buttons */}
                 <img alt='increase' className="action-icons" 
                src="https://as2.ftcdn.net/v2/jpg/01/26/10/59/1000_F_126105961_6vHCTRX2cPOnQTBvx9OSAwRUapYTEmYA.jpg"
                onClick={() => onincreasequantity(product)} />
                <img alt='decrease' className="action-icons" src="https://as2.ftcdn.net/v2/jpg/04/60/56/57/1000_F_460565747_PE6uYbtfeXASxkZpibOoN6SKUWTUHPvY.jpg"
                onClick={() => ondecreasequantity(product)} />
                <img alt='delete' className="action-icons" src="https://as2.ftcdn.net/v2/jpg/01/90/89/15/1000_F_190891550_N7uKp2aHE3mOc20dmtDytj7atgvbhdOu.jpg"
                onClick={() => ondeleteproduct(product.id)} /> 
            </div>
            </div>
            </div>
    );
}
const styles = {
    image: {
      height: 110,
      width: 110,
      borderRadius: 4,
      background: '#ccc'
    }
}
export default Cartitem; 