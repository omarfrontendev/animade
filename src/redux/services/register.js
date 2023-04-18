import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
// import api from "../../api";

export const register = createAsyncThunk(
  "auth/register",
  async (formData, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_SERVER_API_URL}/register/`,
        JSON.stringify({
          username: formData.username,
          email: formData.email,
          password: formData.password,
        }),
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
        {
          redirect: "follow",
        }
      );
      toast.success("Success Register!", {
        position: toast.POSITION.TOP_RIGHT,
        className: "toast__fiy",
      });
      return res.data;
    } catch (error) {
      toast.error(
        (error?.response?.data?.non_field_errors &&
          error?.response?.data?.non_field_errors[0]) ||
          "Something Wrong!",
        {
          position: toast.POSITION.TOP_RIGHT,
          className: "toast__fiy",
        }
      );
      return rejectWithValue(error);
    }
  }
);
