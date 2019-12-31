import { createSelector } from "reselect";

// taking a slice of the cart from our store
// it is an input selector
const selectCart = state => state.cart;

// creating a output selector of all cart items
//this is created by using createSelector() that will take input selector as an array
// & a function that will fetch the desired value from our state (here cartItems)
export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

export const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.hidden
);

// let's create a memoized version of our cartItemsCount
// we are passing selectCartItems coz we only need cartItems array to perform the count
export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (accumulatedQuantity, cartItem) =>
        accumulatedQuantity + cartItem.quantity,
      0
    )
);

export const selectCartTotal = createSelector([selectCartItems], cartItems =>
  cartItems.reduce(
    (accumalatedQuantity, cartItem) =>
      accumalatedQuantity + cartItem.quantity * cartItem.price,
    0
  )
);
