import { createSlice } from "@reduxjs/toolkit";
import shortid from "shortid";

const initialState = {
  services: [
    { id: shortid.generate(), name: "Замена стекла", price: 21000 },
    { id: shortid.generate(), name: "Замена дисплея", price: 25000 },
    { id: shortid.generate(), name: "Замена аккумулятора", price: 4000 },
    { id: shortid.generate(), name: "Диагностика", price: 500 },
    { id: shortid.generate(), name: "Установка ПО", price: 1000 },
  ],
  currentEditServiceId: "",
};

const counterSlice = createSlice({
  name: "serviceList",
  initialState,
  reducers: {
    addService(state, action) {
      state.services.push({ id: shortid.generate(), ...action.payload });
    },

    removeService(state, action) {
      const id = action.payload;
      const index = state.services.findIndex((item) => item.id === id);
      state.services.splice(index, 1);
    },

    editService(state, action) {
      const { id, name, price } = action.payload;
      const service = state.services.find((item) => item.id === id);
      const editService = {
        ...service,
        id,
        name,
        price,
      };

      const newState = state.services.filter((item) => item.id !== id);
      state.services = [...newState, editService];
    },

    addCurrentServiceId(state, action) {
      const { id } = action.payload;
      state.currentEditServiceId = id;
    },

    clearCurrentServiceId(state) {
      state.currentEditServiceId = "";
    },
  },
});

export const {
  addService,
  removeService,
  editService,
  addCurrentServiceId,
  clearCurrentServiceId,
} = counterSlice.actions;
export default counterSlice.reducer;
