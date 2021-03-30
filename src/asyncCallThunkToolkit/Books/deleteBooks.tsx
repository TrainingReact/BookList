import axios, { AxiosResponse } from "axios";
import { createAsyncThunk, AsyncThunk } from "@reduxjs/toolkit";

export const deleteBooks: AsyncThunk<any, any, {}> = createAsyncThunk(
  "books/deleteBooks",
  async (id: any) => {
    return axios.delete(`http://localhost:3000/books/${id}`).then((re: any) => {
      return id;
    });
  }
);
