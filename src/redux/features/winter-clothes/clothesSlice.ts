import { TClothesItem } from "@/types/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface TInitialState {
  clothes: TClothesItem[];
}

const initialState: TInitialState = {
  clothes: [],
};

const clotheSlice = createSlice({
  name: "clothe",
  initialState,
  reducers: {
    addClothe: (state, action: PayloadAction<TClothesItem>) => {
      state.clothes.push({ ...action.payload });
    },
    // deleteClothes: (state, action: PayloadAction<string>) => {
    //   state.clothes = state.clothes.filter(
    //     (item) => item._id !== action.payload
    //   );
    // },
  },
});

export const { addClothe } = clotheSlice.actions;
export default clotheSlice.reducer;
