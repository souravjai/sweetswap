import { configureStore } from "@reduxjs/toolkit"
import sweetSwapReducer from "./reducers/sweetSwapReducer";

const store = configureStore({
    reducer: {
        sweetSwap: sweetSwapReducer
    },
    middleware: (getDefaultMiddlewares) =>
        getDefaultMiddlewares({
            serializableCheck: false
        })

})

export default store;