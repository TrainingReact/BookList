import { createSlice } from "@reduxjs/toolkit";
import { setTextRange } from "typescript";
import Field from "../../types/FieldTypes/FieldTypes";

interface Book {
  id: number;
  name: Field;
  author: Field;
  gender: Field;
  img: Field;
}

interface BookState {
  books: Book[];
  modalChecker: boolean;
  modalCheckerModify: boolean;
}

const initialState = {
  books: [],
  modalChecker: false,
  modalCheckerModify: false,
} as BookState;

const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addBook(state, action) {
      state.books.push(action.payload);
    },
    deleteBook(state, action) {
      state.books = state.books.filter((book) => book.id !== action.payload);
    },
    modifyBook(state, action) {
      state.books = state.books.map((val) => {
        return val.id === action.payload.id ? (val = action.payload.book) : val;
      });
    },
    toggleModalChecker(state, action) {
      state.modalChecker = action.payload;
    },
    toggleModalCheckerModify(state, action) {
      state.modalCheckerModify = action.payload;
    },
  },
});

export const {
  addBook,
  deleteBook,
  modifyBook,
  toggleModalChecker,
  toggleModalCheckerModify,
} = bookSlice.actions;

export default bookSlice.reducer;
