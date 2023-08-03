import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  list: [],
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const inCart = state.list.find((item) => item.id === action.payload.id);
console.log("----CartSlice ---", action?.payload?.price)
console.log("----inCart ---", inCart)
if (inCart) {
  state.list?.map((item) => {
    if (item.id === action.payload.id) {
            console.log("----CartSlice1 ---", action?.payload?.price)
            item.quantity += 1;
          }
          return item;
        }, state);
        console.log("----CartSlice2 ---", action?.payload?.price)
        state.total += Number(action.payload.price);
      } else {
        console.log("----CartSlice2 else ---", typeof(action?.payload?.price))
        console.log("----CartSlice2 elsetotal ---", state.total)
        console.log("----CartSlice2 elsestate ---", state)
        state.list.push({
          ...action.payload,
          quantity: 1,
        });
        state.total += Number(action.payload.price);
      }
    },
    removeFromCart: (state, action) => {
      const inCart = state.list.find((item) => item.id === action.payload.id);

      if (inCart) {
        state.list.map((item) => {
          if (item.id === action.payload.id && item.quantity > 1) {
            item.quantity -= 1;
          } else if (item.id === action.payload.id && item.quantity === 1) {
            state.list.splice(state.list.indexOf(item), 1);
          }
          return item;
        }, state);
        state.total -= Number(action.payload.price);
      }
    },
    removeProduct: (state, action) => {
      const productId = action.payload.id;
      const productIndex = state.list.findIndex((item) => item.id === productId);

      if (productIndex !== -1) {
        const removedProduct = state.list.splice(productIndex, 1)[0];
        state.total -= Number(removedProduct.price) * removedProduct.quantity;
      }
    },
  },
});

export const { addToCart, removeFromCart,removeProduct } = cartSlice.actions;

export default cartSlice.reducer;
