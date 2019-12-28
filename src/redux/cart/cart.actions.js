import CartActionTypes from "./cart.types";

// action just to toggle cart (show/hide)
// here we don't need any payload
export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN
});

// action to add item into the cart
export const addItem = item => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item
});
