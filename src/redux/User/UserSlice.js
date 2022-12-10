import {createSlice} from '@reduxjs/toolkit';

export const UserSlice = createSlice({
  name: 'user',
  initialState: {
    isLoggedIn: false,
    //accessToken: null,
    //refreshToken: null,
    id: null,
    email: null,
    type: null,
    city: null,
    name: null,
    // name: null,
  },
  reducers: {
    userLoggedIn: (state, action) => {
      state.isLoggedIn = true;
      state.name = action?.payload?.name;
      state.email = action?.payload?.email;
      state.type = action?.payload?.type;
      state.id = action?.payload?.id;
      state.city = action?.payload?.city;
    },
    userLoggedOut: (state, action) => {
      state.isLoggedIn = false;
      state.email = null;
      state.type = null;
      state.id = null;
      state.city = null;
    },
  },
});
export const {userLoggedIn, userLoggedOut} = UserSlice.actions;
export const user = state => {
  state.user;
};

export default UserSlice.reducer;
