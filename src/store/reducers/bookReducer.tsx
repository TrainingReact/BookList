import { createSlice } from "@reduxjs/toolkit";
import { getBooks } from "../../asyncCallThunkToolkit/Books/getBooks";
import { addBooks } from "../../asyncCallThunkToolkit/Books/addBooks";
import { updateBooks } from "../../asyncCallThunkToolkit/Books/updateBooks";
import { deleteBooks } from "../../asyncCallThunkToolkit/Books/deleteBooks";
import { BookState } from "../../types/BookStoreTypes/BookStoreTypes";

export const initialState = {
  books: [],
  modalChecker: false,
  modalCheckerModify: false,
  status: "",
} as BookState;

const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    toggleModalChecker(state, action) {
      state.modalChecker = action.payload;
    },
    toggleModalCheckerModify(state, action) {
      state.modalCheckerModify = action.payload;
    },
  },
  extraReducers: {
    [getBooks.pending.toString()]: (state, action) => {
      state.status = "loading";
    },
    [getBooks.fulfilled.toString()]: (state, action) => {
      state.books = action.payload;
      state.status = "success";
    },
    [getBooks.rejected.toString()]: (state, action) => {
      state.status = "failed";
    },
    [addBooks.pending.toString()]: (state, action) => {
      state.status = "loading";
    },
    [addBooks.fulfilled.toString()]: (state, action) => {
      state.books.push(action.payload);
      state.status = "success";
    },
    [addBooks.rejected.toString()]: (state, action) => {
      state.status = "failed";
    },
    [updateBooks.pending.toString()]: (state, action) => {
      state.status = "loading";
    },
    [updateBooks.fulfilled.toString()]: (state, action) => {
      state.books = state.books.map((val) => {
        return val.id === action.payload.id ? (val = action.payload) : val;
      });
      state.status = "success";
    },
    [updateBooks.rejected.toString()]: (state, action) => {
      state.status = "failed";
    },
    [deleteBooks.pending.toString()]: (state, action) => {
      state.status = "loading";
    },
    [deleteBooks.fulfilled.toString()]: (state, action) => {
      state.books = state.books.filter((book) => {
        return book.id !== action.payload;
      });
      state.status = "success";
    },
    [deleteBooks.rejected.toString()]: (state, action) => {
      state.status = "failed";
    },
  },
});

export const {
  toggleModalChecker,
  toggleModalCheckerModify,
} = bookSlice.actions;

export default bookSlice.reducer;
