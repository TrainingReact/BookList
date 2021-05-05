import axios, { AxiosResponse } from "axios";
import { createAsyncThunk, AsyncThunk } from "@reduxjs/toolkit";

export const deleteBooks = createAsyncThunk(
  "books/deleteBooks",
  async (id: number) => {
    return axios
      .delete(`http://localhost:4000/books/${id}`)
      .then((re: AxiosResponse) => {
        return id;
      });
  }
);
