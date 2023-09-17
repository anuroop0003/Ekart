import { createSlice } from "@reduxjs/toolkit";

const LoaderSlicer = createSlice({
    name: "loader",
    initialState: true,
    reducers: {
        showHOCLoader: (state, action) => {
            return true;
        },
        hideHOCLoader: (state, action) => {
            return false
        }
    }
})


const { actions, reducer } = LoaderSlicer;
export default reducer;
export const { hideHOCLoader, showHOCLoader } = actions;