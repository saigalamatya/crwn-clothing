import React from "react";

import CartItem from "../CartItem/CartItem";
import CustomButton from "../CustomButton/CustomButton";
import CartDropDownContainer from "./CartDropDown.container";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

import "./CartDropDown.scss";

const CartDropDown = ({ cartItems, history, dispatch }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          history.push("/checkout");
          dispatch(toggleCartHidden());
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

export default CartDropDownContainer(CartDropDown);
