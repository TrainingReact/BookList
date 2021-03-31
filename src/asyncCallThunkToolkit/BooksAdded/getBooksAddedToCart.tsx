import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getBooksAddedToCart = createAsyncThunk(
  "books/getBooksAddedToCart",
  async () => {
    return axios
      .get("http://localhost:3000/booksAddedToCart")
      .then((res: any) => {
        return res.data;
      });
  }
);
