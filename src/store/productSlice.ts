import { createSlice } from "@reduxjs/toolkit";
import { IProducts } from "../utils/interface";
import { updateLocalStorage } from "../utils";

interface InitialState {
  allProducts: IProducts[];
}

const initialState: InitialState = {
  allProducts: [],
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    fetchAllProducts: (state, action) => {
      state.allProducts = action.payload;
    },
    removeProduct: (state, action) => {
      let updated = state.allProducts.filter(
        (val) => val.id !== action.payload
      );
      updateLocalStorage(updated);
      state.allProducts = updated;
    },
    addProduct: (state, action: { payload: IProducts }) => {
      let updated = [...state.allProducts, action.payload];
      updateLocalStorage(updated);
      state.allProducts = updated;
    },
    updateProduct: (state, action: { payload: IProducts }) => {
      let updated = state.allProducts.map((val) => {
        if (val.id === action.payload.id) {
          val = action.payload;
        }
        return val;
      });
      updateLocalStorage(updated);
      state.allProducts = updated;
    },
  },
});

// Action creators are generated for each case reducer function
export const { fetchAllProducts, addProduct, removeProduct, updateProduct } =
  productSlice.actions;

export default productSlice.reducer;
