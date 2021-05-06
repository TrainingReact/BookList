import axios from "axios";
import { createAsyncThunk, AsyncThunk } from "@reduxjs/toolkit";

export const updateBooks: AsyncThunk<any, any, {}> = createAsyncThunk(
  "books/updateBooks",
  async (book: any) => {
    return axios
      .patch(`http://localhost:4000/books/${book.id}`, book)
      .then((re: any) => {
        return re.data;
      });
  }
);
