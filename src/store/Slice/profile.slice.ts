import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IUser} from "@/types/profile.types";

interface IProfileState {
  user: IUser
}

const initialState: IProfileState = {
  user: {
    name: 'Bob'
  }
}

const ProfileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    changeName: (state: IProfileState, action: PayloadAction<string>) => {
      state.user.name = action.payload
    }
  }
})

export const { changeName } = ProfileSlice.actions
export default ProfileSlice.reducer