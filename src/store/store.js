import { configureStore } from "@reduxjs/toolkit";
import { combineReducers, compose } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { encryptTransform } from 'redux-persist-transform-encrypt';

import cartReducer from "./cartSlice";
import wishlistReducer from "./wishlistSlice";
import tabReducer from "./tabSlice";
// import loginReducer from "./loginSlice";
import userDetailReducer from "./userSlice";

// const reduxEncryptor = encryptTransform({
//   // secretKey: reverseString(Config.ENC_SECRET),
//   secretKey: "ENC_SECRET",
//   onError: function (error) {
//     // Handle the error.
//   },
// });

const reduxEncryptor = encryptTransform({
  secretKey: 'wert',
  onError: function (error) {
    // Handle the error.
  },
});

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["cart", "wishlist", "user_details"],
  blacklist: ["tab"],
  transforms: [reduxEncryptor], //Comment this line if encryptor not needed.
};

const reducers = combineReducers({
    cart: cartReducer,
    wishlist: wishlistReducer,
    tab: tabReducer,
    // login: loginReducer,
    user_details: userDetailReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);


let enhancedCompose = compose;

if (__DEV__) {
  enhancedCompose = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;
}


export const store = configureStore({
  middleware: enhancedCompose((getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    })),

  reducer: persistedReducer
});

export const persistor = persistStore(store);
