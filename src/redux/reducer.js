import { ADD_TO_CART, CLEAR_CART, REMOVE_FROM_CART } from "./constant";

const initialValue = [];

export const cartData = (data = initialValue, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [action.data, ...data];
    case REMOVE_FROM_CART:
      // data.length = data.length ? data.length - 1 : 0;
      const remainingItem = data.filter((item) => item.id !== action.data);
      return [...remainingItem];
    case CLEAR_CART:
      data = [];
      return [...data];
    default:
      return data;
  }
};
