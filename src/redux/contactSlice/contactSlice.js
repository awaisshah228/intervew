import { createSlice } from "@reduxjs/toolkit";
import {getContact} from './contactThunk'
const initialState=[] 


export const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getContact.fulfilled, (state, action) => {
        return action.payload;
      })
   
   
  
},
});

export default contactSlice.reducer;
