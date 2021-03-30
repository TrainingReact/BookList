import { createSlice } from "@reduxjs/toolkit";
import { addBooksToCart } from "../../asyncCallThunkToolkit/BooksAdded/addBooksToCart";
import { BooksAddedToCartTypes } from "../../types/BooksAddedToCartTypes/BooksAddedToCartTypes";

const initialState = {
  booksAddedToCart: [],
  status: "",
} as BooksAddedToCartTypes;

const booksAddedToCartSlice = createSlice({
  name: "booksAddedToCart",
  initialState,
  reducers: {},
  extraReducers: {
    [addBooksToCart.pending.toString()]: (state, action) => {
      state.status = "loading";
    },
    [addBooksToCart.fulfilled.toString()]: (state, action) => {
      state.booksAdddedToCart?.push(action.payload);
      state.status = "success";
    },
    [addBooksToCart.rejected.toString()]: (state, action) => {
      state.status = "failed";
    },
  },
});

export default booksAddedToCartSlice.reducer;
