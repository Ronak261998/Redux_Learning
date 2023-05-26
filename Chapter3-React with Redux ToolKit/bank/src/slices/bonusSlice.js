import { createAction, createSlice } from '@reduxjs/toolkit'

const initialState = {
  points: 11,
}

const incrementByAmount = createAction('account/incrementByAmount')
export const bonusSlice = createSlice({
  name: 'bonus',
  initialState,
  reducers: {
    increment: (state) => {
     
      state.points += 1 //immer Library
    },
 
  },
  extraReducers:(builder)=>{
    builder.addCase(incrementByAmount , (state , action)=>{
        if(action.payload>=100){
            state.points+=1

        }
    })
  }
})

export const { increment} = bonusSlice.actions

export default bonusSlice.reducer