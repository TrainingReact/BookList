import axios from "axios";
import { createAsyncThunk, AsyncThunk } from "@reduxjs/toolkit";

export const updateQuantityBooks: AsyncThunk<any, any, {}> = createAsyncThunk(
  "books/updateBooks",
  async (book: any) => {
    return axios
      .patch(`http://localhost:4000/books/${book?.id}`, {
        quantity: book.quantity,
      })
      .then((re: any) => {
        return re.data;
      });
  }
);
