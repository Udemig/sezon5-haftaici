import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    /* Eğer localStorage'da item varsa itemi dönderir, yoksa null dönderir. */
    token: localStorage.getItem("authToken"),
    user: null
}

const authSlice = createSlice({
    name: "authSlice",
    initialState,
    reducers: {
        setToken: (state, action) => {
            console.warn("🔥 | action:", action)
            console.warn("🔥 | state:", state)

            localStorage.setItem("authToken", action.payload)

            state.token = action.payload
        },
        setUser: (state, action) => {
            console.warn("🔥 | action:", action)
            console.warn("🔥 | state:", state)

            state.user = action.payload
        },
        removeToken: (state) => {
            console.warn("🔥 | state:", state)

            localStorage.removeItem("authToken")

            state.token = null
            state.user = null
        }
    }
})

export const { removeToken, setToken, setUser } = authSlice.actions

export default authSlice.reducer
