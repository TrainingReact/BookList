import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getBooks = createAsyncThunk("books/getBooks", async () => {
  return axios.get("http://localhost:4000/books").then((res) => {
    return res.data;
  });
});
