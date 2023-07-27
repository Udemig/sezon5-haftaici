import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./authSlice";
import categoryReducer from "./categorySlice";

const store = configureStore({
    /* Her ne kadar bu propertynin ismi `reducer` olsa da
    buraya gönderilen propertyler bizim state'imizin property'leri
    olacak. Bunu `configureStore()` fonksiyonu yapıyor.  */
    reducer: {
        /* Buraya gönderdiğimiz property'ler bizim state'imizin
        propertyleri olacak. Bu yüzden property isimlerini
        `State` ifadesiyle sonlandırıyoruz. */

        authState: authReducer,
        categoryState: categoryReducer,
    }
})

export default store
