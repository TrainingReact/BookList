import axios, { AxiosResponse } from "axios";
import { createAsyncThunk, AsyncThunk } from "@reduxjs/toolkit";

export const getBooks: AsyncThunk<
  AxiosResponse<any>,
  void,
  {}
> = createAsyncThunk("books/getBooks", async () => {
  return axios.get("http://localhost:3000/books").then((res) => {
    return res.data;
  });
});
