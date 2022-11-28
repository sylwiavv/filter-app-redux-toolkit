import { configureStore } from '@reduxjs/toolkit'
import peopleSlice from "./people/PeopleSlice";

export const store = configureStore({
    reducer: {
        people: peopleSlice,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch