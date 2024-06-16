import { combineReducers } from "@reduxjs/toolkit";
import data from "./data";

export const rootReducer = combineReducers({
    data: data
}) 