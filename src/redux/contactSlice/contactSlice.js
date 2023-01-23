import { createSlice } from '@reduxjs/toolkit'
const initialState=[
    {
        id: 1,
        name: "Elma Herring",
        email: "elmaherring@unq.com",
        phone: "+1 (913) 497-2020"
      },
      {
        id: 2,
        name: "Knapp Berry",
        email: "knappberry@unq.com",
        phone: "+1 (951) 472-2967"
      },
      {
        id: 3,
        name: "Bell Burgess",
        email: "bellburgess@unq.com",
        phone: "+1 (887) 478-2693"
      },
    {
        id: 3,
        name: "Elma Herring",
        email: "elmaherring@unq.com",
        phone: "+1 (913) 497-2020",
        address: "NewYork"
      },
      {
        id: 4,
        name: "Knapp Berry",
        email: "knappberry@unq.com",
        phone: "+1 (951) 472-2967",
        address: "Calfornia"
      },
      {
        id: 5,
        name: "Bell Burgess",
        email: "bellburgess@unq.com",
        phone: "+1 (887) 478-2693"
      },
]
export const contactSlice = createSlice({
  name: 'contact',
  initialState,
//   reducers: {
//     increment: (state) => {
//       // Redux Toolkit allows us to write "mutating" logic in reducers. It
//       // doesn't actually mutate the state because it uses the immer library,
//       // which detects changes to a "draft state" and produces a brand new
//       // immutable state based off those changes
//       state.value += 1
//     },
//     decrement: (state) => {
//       state.value -= 1
//     },
//     incrementByAmount: (state, action) => {
//       state.value += action.payload
//     },
//   },
})

// export const { increment, decrement, incrementByAmount } = contactSlice.actions

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
// export const incrementAsync = (amount) => (dispatch) => {
//   setTimeout(() => {
//     dispatch(incrementByAmount(amount))
//   }, 1000)
// }

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
// export const selectContacts = (state) => state.contact

export default contactSlice.reducer
