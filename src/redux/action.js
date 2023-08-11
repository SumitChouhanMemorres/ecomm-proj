import { ADD_TO_CART, CLEAR_CART, REMOVE_FROM_CART } from "./constant";

export const addToCart = (data) => {
  console.log(data);
  return {
    type: ADD_TO_CART,
    data,
  };
};

export const removeFromCart = (data) => {
  console.log(data);
  return {
    type: REMOVE_FROM_CART,
    data,
  };
};

export const emptyCart = () => {
  return {
    type: CLEAR_CART,
  };
};
