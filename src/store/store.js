import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import dataReducer from "./data_slice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["data"],
};

const persistedReducer = persistReducer(persistConfig, dataReducer);

const store = configureStore({
  reducer: {
    data: persistedReducer,
  },
});

const persistor = persistStore(store);

export { store, persistor };
