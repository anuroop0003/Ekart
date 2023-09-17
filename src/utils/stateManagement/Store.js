import { configureStore } from "@reduxjs/toolkit";
import LoaderReducer from "./RootSlicer";


export default configureStore({
    reducer: {
        loader: LoaderReducer,
    }
});;