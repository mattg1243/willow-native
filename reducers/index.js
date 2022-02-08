import { combineReducers } from "redux";
import userReducer from './user';
import clientReducer from './clients';
import selectedClientReducer from './selectedClient';

const rootReducer = combineReducers({
    user: userReducer,
    clients: clientReducer,
    selectedClient: selectedClientReducer,
});

export default rootReducer;