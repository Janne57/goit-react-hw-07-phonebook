import { configureStore } from '@reduxjs/toolkit';
import { contactReducer } from './contactSlice.js';
import { filterReducer } from './filterSlice.js';

export const store = configureStore({
  reducer: {
    contacts: contactReducer,
    filter: filterReducer,
  },
});



























//task 8
// import { configureStore } from '@reduxjs/toolkit';
// import { contactsApi } from './contactSlice.js';
// import {filterReducer} from './filterSlice.js';

// export const store = configureStore({
//   reducer: {
//     // filter: filterReducer,
//     [contactsApi.reducerPath]: contactsApi.reducer,
//     [filterReducer.reducerPath]: filterReducer.reducer,
//   },
//   middleware: getDefaultMiddleware => [
//     ...getDefaultMiddleware(),
//     contactsApi.middleware,
//   ],
// });

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
