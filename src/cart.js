import React from "react";
import Cartitem from "./Cartitem";
const Cart = (props) => {
        const {products} = props;
        return(
            <div className="cartcss">
                {products.map((product) =>{
                   return (
                   <Cartitem product={product}
                    key={product.id}
                    onincreasequantity={props.onincreasequantity}
                    ondecreasequantity={props.ondecreasequantity}
                    ondeleteproduct={props.ondeleteproduct}
                    />
                ) 
                })}
                </div>
        );
}
export default Cart;