import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getBooksAddedToCart = createAsyncThunk(
  "books/getBooksAddedToCart",
  async () => {
    return axios
      .get("http://localhost:4000/booksAddedToCart")
      .then((res: any) => {
        return res.data;
      });
  }
);
