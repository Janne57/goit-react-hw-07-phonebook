import { configureStore } from '@reduxjs/toolkit';
import { contactsApi } from './contactSlice.js';

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
});

// import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';

// import { configureStore } from '@reduxjs/toolkit';
// import contactsReducer from './contactSlice.js';

// const persistConfig = {
//   key: 'root',
//   version: 1,
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig, contactsReducer);

// export const store = configureStore({
//   reducer: persistedReducer,
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });

// export const persistor = persistStore(store);

// import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

// import {
//     persistStore,
//     persistReducer,
//     FLUSH,
//     REHYDRATE,
//     PAUSE,
//     PERSIST,
//     PURGE,
//     REGISTER,
//   } from "redux-persist";

//   import { configureStore } from "@reduxjs/toolkit";
//   import  contactsReducer from './contactSlice.js';

// const persistConfig = {
//     key: 'root',
//     version: 1,
//     storage,
//   }

//   const persistedReducer = persistReducer(persistConfig, contactsReducer)

//   export const store = configureStore({
//     reducer: persistedReducer,
//     middleware: (getDefaultMiddleware) =>
//       getDefaultMiddleware({
//         serializableCheck: {
//           ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//         },
//       }),
//   })

//   export const persistor = persistStore(store)
