import { combineReducers } from "redux";
import userReducer from './user';
import clientReducer from './clients';

const rootReducer = combineReducers({
    user: userReducer,
    clients: clientReducer
});

export default rootReducer;