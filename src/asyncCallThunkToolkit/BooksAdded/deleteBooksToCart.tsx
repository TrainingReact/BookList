import axios from "axios";
import { createAsyncThunk, AsyncThunk } from "@reduxjs/toolkit";

export const deleteBooksToCart: AsyncThunk<any, number, {}> = createAsyncThunk(
  "books/deleteBooksToCart",
  async (id: number) => {
    return axios
      .delete(`http://localhost:4000/booksAddedToCart/${id}`)
      .then((re: any) => {
        return id;
      });
  }
);
