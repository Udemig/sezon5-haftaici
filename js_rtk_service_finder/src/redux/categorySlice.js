import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    categories: []
}

const categorySlice = createSlice({
    name: "categorySlice",
    initialState,
    reducers: {
        /* Reducer fonksiyonlarını buraya yazıyoruz. Bu fonksiyon isimleri
        redux-toolkit tarafından action fonksiyonları oluşturmak
        için kullanılacak. */
        setCategories: (state, action) => {
            console.warn("🔥 | setCategories -> action:", action)

            state.categories = action.payload
        },
    }
})

export const { setCategories } = categorySlice.actions

export default categorySlice.reducer
