import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import getApiBaseUrl from "./api";

export const apiAuthSlice = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: getApiBaseUrl(),
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      console.log("Token form:" + token);
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (newUser) => ({
        url: "/register",
        method: "POST",
        body: newUser,
      }),
    }),
    loginUser: builder.mutation({
      query: (credentials) => ({
        url: "/login",
        method: "POST",
        body: credentials,
      }),
    }),
    checkStudentApproval: builder.mutation({
      query: (num_document) => ({
        url: `/students/${num_document}/approval`,
        method: "POST"
      }),
    }),
    userController: builder.mutation({
      query: (email) => ({
        url: `users/${email}`,
        method: "POST"
      }),
    }),
  }),
});

export const { useRegisterUserMutation, useLoginUserMutation, useCheckStudentApprovalMutation, useUserControllerMutation } = apiAuthSlice;
