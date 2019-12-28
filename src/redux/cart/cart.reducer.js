import CartActionTypes from "./cart.types";

const INITIAL_STATE = {
  hidden: true, // cart is hidden
  cartItems: [] // initially no cart item in there
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload] // add the new item (action.payload / object of item) to the cart
        // final cart will be : ...all previous items + new item
      };
    default:
      return state;
  }
};

export default cartReducer;
