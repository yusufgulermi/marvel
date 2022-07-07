import { createSlice } from '@reduxjs/toolkit'

export const pageCountSlice = createSlice({
  name: 'pageCount',
  initialState: {
    value: 0
  },
  reducers: {
    increment: state => {
      state.value += 30
    },
    decrement: state => {
      state.value <=0 ? state.value=0:state.value -= 30
    },
  }
})

export const { increment, decrement } = pageCountSlice.actions

export default pageCountSlice.reducer