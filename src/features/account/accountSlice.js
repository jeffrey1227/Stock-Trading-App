import { createSlice } from '@reduxjs/toolkit'

export const accountSlice = createSlice({
  name: 'account',
  initialState: {
    token: ""
  },
  reducers: {
    storeToken: (state, action) => {
      state.token = action.payload
    },
    removeToken: state => {
      state.token = ""
    },
  }
})

export const { storeToken, removeToken } = accountSlice.actions

export default accountSlice.reducer