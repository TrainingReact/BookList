import { createSlice } from "@reduxjs/toolkit";
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
}

const initialState = {
  books: [],
} as BookState;

const bookSlice = createSlice({
  name: "counter",
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
  },
});

export const { addBook, deleteBook, modifyBook } = bookSlice.actions;

export default bookSlice.reducer;
