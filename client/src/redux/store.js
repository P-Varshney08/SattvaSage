// import { configureStore } from '@reduxjs/toolkit'
// import userSlice from './user/userSlice.js'

// export const store = configureStore({
//     reducer: {
//         user: userSlice,
//     }
// })







import { combineReducers, configureStore } from '@reduxjs/toolkit'
import userSlice from './user/userSlice.js'
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';        // defaults to localStorage for web

const rootReducer = combineReducers({       //it will combine all the reducers
    user: userSlice,
})

const persistConfig = {
    key: 'root',
    storage,
}
// persistConfig uses localStorage for persistance with key -> 'priya'

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    // reducer: {
    //     user: userSlice,
    // }
    reducer: persistedReducer,
})

export const persistor = persistStore(store);