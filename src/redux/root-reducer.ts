import { combineReducers } from 'redux';

import cartReducer from '@/redux/cart/slice';
import userReducer from '@/redux/user/slice';

const rootReducer = combineReducers({ userReducer, cartReducer });

export default rootReducer;
