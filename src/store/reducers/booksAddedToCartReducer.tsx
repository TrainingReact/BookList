import { createSlice } from "@reduxjs/toolkit";
import { addBooksToCart } from "../../asyncCallThunkToolkit/BooksAdded/addBooksToCart";
import { BooksAddedToCartTypes } from "../../types/BooksAddedToCartTypes/BooksAddedToCartTypes";
import { getBooksAddedToCart } from "../../asyncCallThunkToolkit/BooksAdded/getBooksAddedToCart";
import { deleteBooksToCart } from "../../asyncCallThunkToolkit/BooksAdded/deleteBooksToCart";
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
      state.booksAddedToCart.push(action.payload);
      state.status = "success";
    },
    [addBooksToCart.rejected.toString()]: (state, action) => {
      state.status = "failed";
    },
    [getBooksAddedToCart.pending.toString()]: (state, action) => {
      state.status = "loading";
    },
    [getBooksAddedToCart.fulfilled.toString()]: (state, action) => {
      state.booksAddedToCart = action.payload;
      state.status = "success";
    },
    [getBooksAddedToCart.rejected.toString()]: (state, action) => {
      state.status = "failed";
    },
    [deleteBooksToCart.pending.toString()]: (state, action) => {
      state.status = "loading";
    },
    [deleteBooksToCart.fulfilled.toString()]: (state, action) => {
      state.booksAddedToCart = state.booksAddedToCart.filter((book) => {
        return book.id !== action.payload;
      });
      state.status = "success";
    },
    [deleteBooksToCart.rejected.toString()]: (state, action) => {
      state.status = "failed";
    },
  },
});

export default booksAddedToCartSlice.reducer;
