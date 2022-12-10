import {configureStore} from '@reduxjs/toolkit';
import userReducer from './User/UserSlice';
import cartReducer from './User/CartSlice';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {combineReducers} from 'redux';
import thunk from 'redux-thunk';
const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
});
const persistConfig = {
  key: 'root',
  version: 1,
  storage: AsyncStorage,
  blacklist: ['cart'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export default store;
