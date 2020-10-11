import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selecttCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
);

export const selectCartItemsCount = createSelector(
    [selecttCartItems],
    cartItems => cartItems.reduce((accumulatorQuantity, cartItem)=> accumulatorQuantity + cartItem.quantity, 0)
);