import { configureStore } from "@reduxjs/toolkit";
import filter from "./Filter";
import serviceList from "./SliceServiceList";
import serviceAdd from "./SliceServiceAdd";

const store = configureStore({
  reducer: {
    filter,
    serviceList,
    serviceAdd,
  },
});

export default store;
